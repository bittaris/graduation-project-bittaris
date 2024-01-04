const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_CONNECTION_STRING).then(() => console.log('Connected to MongoDB'))

// const User = mongoose.model('User', { username: String, cart: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Item' }] })

// const user = new User({ username: 'Bunny', cart: [] })

// user.save().then(() => console.log('User saved'))
