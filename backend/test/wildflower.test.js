const request = require('supertest')
const User = require('../src/models/user')
const Product = require('../src/models/product')

const app = require('../src/app')

describe('Wildflower', () => {
  beforeEach(async () => {
    await request(app).get('/delete')
  })

  it('can create a user', async () => {
    const firstName = 'Bunny'
    const lastName = 'Lula'
    const email = 'lula@bunny.co'
    const password = '123456'
    const type = 'customer'

    const expectedOutput = {
      firstName,
      lastName,
      email,
      type,
      cart: [],
    }

    const actualOutput = await request(app).post('/users').send({ firstName, lastName, email, password, type })

    expect(actualOutput.body).toMatchObject(expectedOutput)
    expect(actualOutput.body._id).toBeDefined()
  })

  // it can let users login
  it('can let users login', async () => {
    const firstName = 'Bunny'
    const lastName = 'Lula'
    const email = 'lula@bunny.com'
    const password = '123456'

    await request(app).post('/users').send({ firstName, lastName, email, password, type: 'customer' })

    const expectedOutput = {
      firstName: 'Bunny',
      lastName: 'Lula',
      email,
    }

    const actualOutput = await request(app).post('/accounts/session').send({ email, password })

    expect(actualOutput.body).toMatchObject(expectedOutput)
  })

  it('can get all users', async () => {
    await request(app)
      .post('/users')
      .send({ firstName: 'Bunny', lastName: 'Lula', email: 'lula@bunny.com', password: '123456', type: 'customer' })
    await request(app)
      .post('/users')
      .send({ firstName: 'Foxxy', lastName: 'Lula', email: 'lula@la.com', password: '123456', type: 'customer' })
    await request(app)
      .post('/users')
      .send({ firstName: 'Lula', lastName: 'Lulala', email: 'lula@la.co', password: '123456', type: 'customer' })

    const expectedOutput = [
      {
        firstName: 'Bunny',
        lastName: 'Lula',
        email: 'lula@bunny.com',
        type: 'customer',
        cart: [],
      },
      {
        firstName: 'Foxxy',
        lastName: 'Lula',
        email: 'lula@la.com',
        type: 'customer',
        cart: [],
      },
      {
        firstName: 'Lula',
        lastName: 'Lulala',
        email: 'lula@la.co',
        type: 'customer',
        cart: [],
      },
    ]

    const actualOutput = await request(app).get('/users')

    expect(actualOutput.body).toMatchObject(expectedOutput)
  })

  it('can get a specific user', async () => {
    const bunny = await request(app)
      .post('/users')
      .send({ firstName: 'Bunny', lastName: 'Lula', email: 'lula@bunny.com', password: '123456', type: 'customer' })

    const lula = await request(app)
      .post('/users')
      .send({ firstName: 'Lula', lastName: 'Lula', email: 'lula@la.co, password: 123456', type: 'customer' })

    const expectedOutput = {
      firstName: 'Bunny',
      lastName: 'Lula',
      email: 'lula@bunny.com',
      cart: [],
    }

    const actualOutput = await request(app).get(`/users/${bunny.body._id}`)

    expect(actualOutput.body).toMatchObject(expectedOutput)
  })

  // it('can create a product', async () => {
  //   const title = 'Bouquet One'
  //   const description = '10 Pink Peonies'
  //   const price = '30€'

  //   const expectedOutput = {
  //     title,
  //     description,
  //     price,
  //   }

  //   const actualOutput = await request(app).post('/products').send({ title, description, price })

  //   expect(actualOutput.body).toMatchObject(expectedOutput)
  //   expect(actualOutput.body._id).toBeDefined()
  // })

  // it('can get all products', async () => {
  //   const bouquetOne = await request(app).post('/products').send({
  //     title: 'Bouquet One',
  //     description: '10 Pink Peonies',
  //     price: '30€',
  //   })

  //   const bouquetTwo = await request(app).post('/products').send({
  //     title: 'Bouquet Two',
  //     description: '20 Yellow Roses',
  //     price: '35€',
  //   })

  //   const bouquetThree = await request(app).post('/products').send({
  //     title: 'Bouquet Three',
  //     description: '25 Pink Carnations',
  //     price: '30€',
  //   })

  //   const bouquetFour = await request(app).post('/products').send({
  //     title: 'Bouquet Four',
  //     description: '15 Yellow Daffodils',
  //     price: '25€',
  //   })

  //   const bouquetFive = await request(app).post('/products').send({
  //     title: 'Bouquet Five',
  //     description: '25 White Roses',
  //     price: '40€',
  //   })

  //   const expectedOutput = [
  //     {
  //       title: 'Bouquet One',
  //       description: '10 Pink Peonies',
  //       price: '30€',
  //       _id: bouquetOne.body._id,
  //     },
  //     {
  //       title: 'Bouquet Two',
  //       description: '20 Yellow Roses',
  //       price: '35€',
  //       _id: bouquetTwo.body._id,
  //     },
  //     {
  //       title: 'Bouquet Three',
  //       description: '25 Pink Carnations',
  //       price: '30€',
  //       _id: bouquetThree.body._id,
  //     },
  //     {
  //       title: 'Bouquet Four',
  //       description: '15 Yellow Daffodils',
  //       price: '25€',
  //       _id: bouquetFour.body._id,
  //     },
  //     {
  //       title: 'Bouquet Five',
  //       description: '25 White Roses',
  //       price: '40€',
  //       _id: bouquetFive.body._id,
  //     },
  //   ]

  //   const actualOutput = await request(app).get('/products')

  //   expect(actualOutput.body).toMatchObject(expectedOutput)
  // })

  // it('can delete a user', async () => {
  //   const bunny = await request(app).post('/users').send({ username: 'Bunny' })
  //   const lula = await request(app).post('/users').send({ username: 'Lula' })

  //   const expectedOutput = {}

  //   const actualOutput = await request(app).delete(`/users/${lula.body._id}`)

  //   expect(actualOutput.body).toMatchObject(expectedOutput)
  //   expect(actualOutput.status).toBe(200)
  // })

  // it('can delete a product', async () => {
  //   const bouquetOne = await request(app).post('/products').send({
  //     title: 'Bouquet One',
  //     description: '10 Pink Peonies',
  //     price: '30€',
  //   })

  //   const expectedOutput = {}

  //   const actualOutput = await request(app).delete(`/products/${bouquetOne.body._id}`)

  //   expect(actualOutput.body).toMatchObject(expectedOutput)
  //   expect(actualOutput.status).toBe(200)
  // })

  // it('can let a user add an item to the cart', async () => {
  //   const bunny = await request(app).post('/users').send({ username: 'Bunny' })
  //   const bouquetOne = await request(app).post('/products').send({
  //     title: 'Bouquet One',
  //     description: '10 Pink Peonies',
  //     price: '30€',
  //   })

  //   const expectedOutput = {
  //     username: 'Bunny',
  //     cart: [
  //       {
  //         _id: bouquetOne.body._id,
  //         title: 'Bouquet One',
  //         description: '10 Pink Peonies',
  //         price: '30€',
  //       },
  //     ],
  //     _id: bunny.body._id,
  //   }

  //   const actualOutput = await request(app).post(`/users/${bunny.body._id}/cart/items`).send({
  //     itemId: bouquetOne.body._id,
  //   })

  //   expect(actualOutput.body).toMatchObject(expectedOutput)
  // })

  // it('can get the cart of a user', async () => {
  //   const bunny = await request(app).post('/users').send({ username: 'Bunny' })
  //   const bouquetOne = await request(app).post('/products').send({
  //     title: 'Bouquet One',
  //     description: '10 Pink Peonies',
  //     price: '30€',
  //   })

  //   const expectedOutput = [
  //     {
  //       _id: bouquetOne.body._id,
  //       title: 'Bouquet One',
  //       description: '10 Pink Peonies',
  //       price: '30€',
  //     },
  //   ]

  //   await request(app).post(`/users/${bunny.body._id}/cart/items`).send({
  //     itemId: bouquetOne.body._id,
  //   })

  //   const actualOutput = await request(app).get(`/users/${bunny.body._id}/cart`)

  //   expect(actualOutput.body).toMatchObject(expectedOutput)
  // })

  // it('can let a user remove an item from the cart', async () => {
  //   const bunny = await request(app).post('/users').send({ username: 'Bunny' })
  //   const bouquetOne = await request(app).post('/products').send({
  //     title: 'Bouquet One',
  //     description: '10 Pink Peonies',
  //     price: '30€',
  //   })

  //   const expectedOutput = {
  //     username: 'Bunny',
  //     cart: [],
  //     _id: bunny.body._id,
  //   }

  //   await request(app).post(`/users/${bunny.body._id}/cart/items`).send({
  //     itemId: bouquetOne.body._id,
  //   })

  //   await request(app).delete(`/users/${bunny.body._id}/cart/items/${bouquetOne.body._id}`)

  //   const actualOutput = await request(app).get(`/users/${bunny.body._id}`)

  //   expect(actualOutput.body).toMatchObject(expectedOutput)
  // })

  // // it(can let a user place an order, async () => {

  // // it(can get all the orders, async () => {

  // it("responds with 404 if the user doesn't exist", async () => {
  //   const bunny = await request(app).post('/users').send({ username: 'Bunny' })
  //   const lula = await request(app).post('/users').send({ username: 'Lula' })

  //   await request(app).delete(`/users/${lula.body._id}`)

  //   const expectedOutput = 'User not found'
  //   const actualOutput = await request(app).get(`/users/${lula.body._id}`)
  //   expect(actualOutput.text).toMatch(expectedOutput)

  //   expect(actualOutput.status).toBe(404)
  // })
})
