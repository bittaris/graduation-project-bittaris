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
  })
