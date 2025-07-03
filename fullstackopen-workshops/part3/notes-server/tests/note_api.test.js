// const { test, after } = require('node:test')

const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')

//wrap garyo app lae    
const api = supertest(app)

test('notes are returned as json', async () => {
  await api
    .get('/api/notes')
    .expect(200)
    // .expect('Content-Type', 'application/json; charset=utf-8')
    // .expect('Content-Type', /application\/json/)
    .expect('Content-Type', /application\/json/);
}, 10000) // 10 seconds timeout

test('all notes are returned', async () => {
  const response = await api.get('/api/notes')
  
  expect(response.body).toHaveLength(6);
  // expect(response.body.length).toBe(3)
//   assert.strictEqual(response.body.length, 2)
})

test('a specific note is within the returned notes', async () => {
  const response = await api.get('/api/notes')
  
  expect(response.body[0].content).toBe('HTML is easy');
//   const contents = response.body.map(e => e.content)
//   assert.strictEqual(contents.includes('HTML is easy'), true)
})

afterAll(async () => {
  await mongoose.connection.close()
})