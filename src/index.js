const User = require('./user')
const Product = require('./product')
const Order = require('./order')
const Axios = require('axios')
const { default: axios } = require('axios')

// fetch users with axios
// axios.get('http://localhost:3000/users').then(response => {
//   console.log(response.data)
// })

// create a user with axious
async function main() {
  const bunny = await axios.post('http://localhost:3000/users', {
    username: 'Bunny',
  })

  const turtle = await axios.post('http://localhost:3000/users', {
    username: 'Turtle',
  })

  console.log(bunny.data)
  console.log(turtle.data)

  const allUsers = await axios.get('http://localhost:3000/users')

  console.log('List of all the users: ', allUsers.data)
}

main()

// const client = Axios.create({
//   baseURL: 'http://localhost:3000',
//   timeout: 1000,
//   headers: { 'X-Custom-Header': 'foobar' },
// })

// async function main() {
//   try {
//     const usersResponse = await client.get('/users')
//     console.log(usersResponse.data)
//     const productsResponse = await client.get('/products')

//     const products = productsResponse.data
//     console.log(products)

//     const bunny = new User('bunny', [])
//     const turtle = new User('turtle', [])

//     //const bunny = new User(usersResponse.data.username)
//     //const turtle = new User(usersResponse.data.username)

//     const bunnyUser = usersResponse.data[0]
//     console.log('bunnyUser: ' + bunnyUser)
//     const turtleUser = usersResponse.data[1]
//     console.log('turtleUser: ' + turtleUser)

//     const bouquetOneInfo = productsResponse.data[0]
//     const bouquetOne = new Product(bouquetOneInfo.title, bouquetOneInfo.description, bouquetOneInfo.price)

//     const bouquetTwoInfo = productsResponse.data[1]
//     const bouquetTwo = new Product(bouquetTwoInfo.title, bouquetTwoInfo.description, bouquetTwoInfo.price)

//     const bouquetThreeInfo = productsResponse.data[2]
//     const bouquetThree = new Product(bouquetThreeInfo.title, bouquetThreeInfo.description, bouquetThreeInfo.price)

//     const bouquetFourInfo = productsResponse.data[3]
//     const bouquetFour = new Product(bouquetFourInfo.title, bouquetFourInfo.description, bouquetFourInfo.price)

//     const bouquetFiveInfo = productsResponse.data[4]
//     const bouquetFive = new Product(bouquetFiveInfo.title, bouquetFiveInfo.description, bouquetFiveInfo.price)

//     bunny.addItem(bouquetOne)
//     bunny.addItem(bouquetTwo)
//     bunny.addItem(bouquetFive)
//     bunny.addItem(bouquetFour)
//     console.log("Bunny's cart should have 4 items. Test says: " + bunny.cart.length)

//     turtle.addItem(bouquetThree)
//     turtle.addItem(bouquetFour)
//     turtle.addItem(bouquetFive)
//     console.log("Turtle's cart should have 3 items. Test says: " + turtle.cart.length)

//     const bunnysOrder = new Order(bunny, bunny.cart, 'Lalastr. 22 12345')
//     bunny.placeOrder('Lalastr. 22 12345')
//     console.log("Bunny's order: " + bunnysOrder)
//   } catch (error) {
//     console.error(error)
//   }
// }

// main()
