const request = require('supertest')
const User = require('../src/models/user')
const Product = require('../src/models/product')

const app = require('../src/app')

describe('Wildflower', () => {
  beforeEach(async () => {
    await request(app).get('/delete')
  })

  it('can create a user', async () => {
    const username = 'Bunny'

    const expectedOutput = {
      username,
      cart: [],
    }

    const actualOutput = await request(app).post('/users').send({ username })

    expect(actualOutput.body).toMatchObject(expectedOutput)
    expect(actualOutput.body._id).toBeDefined()
  })

  it('can get all users', async () => {
    const bunny = await request(app).post('/users').send({ username: 'Bunny' })
    const lula = await request(app).post('/users').send({ username: 'Lula' })

    const expectedOutput = [
      {
        username: 'Bunny',
        cart: [],
        _id: bunny.body._id,
      },
      {
        username: 'Lula',
        cart: [],
        _id: lula.body._id,
      },
    ]

    const actualOutput = await request(app).get('/users')

    expect(actualOutput.body).toMatchObject(expectedOutput)
  })

  it('can get a specific user', async () => {
    const bunny = await request(app).post('/users').send({ username: 'Bunny' })
    const lula = await request(app).post('/users').send({ username: 'Lula' })

    const expectedOutput = {
      username: 'Bunny',
      cart: [],
      _id: bunny.body._id,
    }

    const actualOutput = await request(app).get(`/users/${bunny.body._id}`)

    expect(actualOutput.body).toMatchObject(expectedOutput)
  })

  it('can create a product', async () => {
    const title = 'Bouquet One'
    const description = '10 Pink Peonies'
    const price = '30€'

    const expectedOutput = {
      title,
      description,
      price,
    }

    const actualOutput = await request(app).post('/products').send({ title, description, price })

    expect(actualOutput.body).toMatchObject(expectedOutput)
    expect(actualOutput.body._id).toBeDefined()
  })

  it('should delete a user', async () => {
    const bunny = await request(app).post('/users').send({ username: 'Bunny' })
    const lula = await request(app).post('/users').send({ username: 'Lula' })

    const expectedOutput = {}

    const actualOutput = await request(app).delete(`/users/${lula.body._id}`)

    expect(actualOutput.body).toMatchObject(expectedOutput)
    expect(actualOutput.status).toBe(200)
  })

  it('can delete a product', async () => {
    const bouquetOne = await request(app).post('/products').send({
      title: 'Bouquet One',
      description: '10 Pink Peonies',
      price: '30€',
    })

    const expectedOutput = {}

    const actualOutput = await request(app).delete(`/products/${bouquetOne.body._id}`)

    expect(actualOutput.body).toMatchObject(expectedOutput)
    expect(actualOutput.status).toBe(200)
  })

  it('can get all products', async () => {
    const bouquetOne = await request(app).post('/products').send({
      title: 'Bouquet One',
      description: '10 Pink Peonies',
      price: '30€',
    })

    const bouquetTwo = await request(app).post('/products').send({
      title: 'Bouquet Two',
      description: '20 Yellow Roses',
      price: '35€',
    })

    const bouquetThree = await request(app).post('/products').send({
      title: 'Bouquet Three',
      description: '25 Pink Carnations',
      price: '30€',
    })

    const bouquetFour = await request(app).post('/products').send({
      title: 'Bouquet Four',
      description: '15 Yellow Daffodils',
      price: '25€',
    })

    const bouquetFive = await request(app).post('/products').send({
      title: 'Bouquet Five',
      description: '25 White Roses',
      price: '40€',
    })

    const expectedOutput = [
      {
        title: 'Bouquet One',
        description: '10 Pink Peonies',
        price: '30€',
        _id: bouquetOne.body._id,
      },
      {
        title: 'Bouquet Two',
        description: '20 Yellow Roses',
        price: '35€',
        _id: bouquetTwo.body._id,
      },
      {
        title: 'Bouquet Three',
        description: '25 Pink Carnations',
        price: '30€',
        _id: bouquetThree.body._id,
      },
      {
        title: 'Bouquet Four',
        description: '15 Yellow Daffodils',
        price: '25€',
        _id: bouquetFour.body._id,
      },
      {
        title: 'Bouquet Five',
        description: '25 White Roses',
        price: '40€',
        _id: bouquetFive.body._id,
      },
    ]

    const actualOutput = await request(app).get('/products')

    expect(actualOutput.body).toMatchObject(expectedOutput)
  })
})
