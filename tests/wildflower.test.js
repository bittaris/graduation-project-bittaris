const request = require('supertest')

const app = require('../src/app')

describe('Wildflower', () => {
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
  })
