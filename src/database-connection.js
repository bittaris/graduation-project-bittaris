const mongoose = require('mongoose')
mongoose
  .connect(process.env.MONGODB_CONNECTION_STRING)
  .then(() => console.log('Connected to MongoDB'))
  .catch(error => console.log('Error connecting to MongoDB', error.message ? error.message : error))

// const User = mongoose.model('User', { username: String, cart: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Item' }] })

// const user = new User({ username: 'Bunny', cart: [] })

// user.save().then(() => console.log('User saved'))
