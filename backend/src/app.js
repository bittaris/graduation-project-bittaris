require('dotenv').config()

const createError = require('http-errors')
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const cors = require('cors')
const session = require('express-session')
const MongoStore = require('connect-mongo')

const mongoose = require('mongoose')

require('./database-connection')

const indexRouter = require('./routes/index')
const usersRouter = require('./routes/users')
const productsRouter = require('./routes/products')
const ordersRouter = require('./routes/orders')
const accountsRouter = require('./routes/accounts')

// requires the model with Passport-Local Mongoose plugged in
const User = require('./models/user')
const passport = require('passport')

// use static authenticate method of model in LocalStrategy
passport.use(User.createStrategy())

// use static serialize and deserialize of model for passport session support
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

const app = express()

app.use(
  cors({
    origin: 'http://localhost:5173', // needs to be changed for deployment
    methods: ['GET', 'POST', 'DELETE', 'PATCH', 'PUT'],
    credentials: true,
  })
)

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

const clientPromise = mongoose.connection.asPromise().then(connection => (connection = connection.getClient()))
mongoose.connection.on('error', err => {
  console.log('MongoDB connection error:', err)
})

const sessionMiddleware = session({
  secret: 'iuhsdfiuwhfiufwhfaoksodjodijsd',
  resave: false,
  saveUninitialized: true,
  cookie: {
    // httpOnly: false,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 1000 * 60 * 60 * 24 * 7, // 1 week
  },
  store: MongoStore.create({ clientPromise, stringify: false }),
})

app.use(sessionMiddleware)

app.use(passport.session())

app.use((req, res, next) => {
  const numberOfVisits = req.session.numberOfVisits || 0
  req.session.numberOfVisits = numberOfVisits + 1
  req.session.history = req.session.history || []
  req.session.history.push(req.url)
  req.session.ip = req.ip

  // console.log('session', req.session)

  next()
})

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter)
app.use('/users', usersRouter)
app.use('/products', productsRouter)
app.use('/orders', ordersRouter)
app.use('/accounts', accountsRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

app.createSocketServer = function (server) {
  const io = require('socket.io')(server, {
    cors: {
      origin: true,
      credentials: true,
    },
  })

  io.engine.use(sessionMiddleware)
  io.engine.use(passport.initialize())
  io.engine.use(passport.session())

  console.log('socket.io server created')

  io.on('connection', socket => {
    console.log('a user connected')

    console.log('user: ', socket.request.user)

    console.log('user session: ', socket.request.session)

    // socket.emit('number of visits', socket.request.session.numberOfVisits)

    socket.on('disconnect', () => {
      console.log('user disconnected')
    })
  })
}

module.exports = app
