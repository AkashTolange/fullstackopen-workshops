// const { test, after } = require('node:test')

const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')

const Note = require('../models/note')
//wrap garyo app lae    


const initialNotes = [
  {
    content: 'HTML is easy',
    important: false,
  },
  {
    content: 'Browser can execute only JavaScript',
    important: true,
  },
]

beforeEach(async () => {
  await Note.deleteMany({})
  let noteObject = new Note(initialNotes[0])
  await noteObject.save()
  noteObject = new Note(initialNotes[1])
  await noteObject.save()
})

const api = supertest(app);

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
  
  expect(response.body).toHaveLength(initialNotes.length);
  // expect(response.body.length).toBe(3)
//   assert.strictEqual(response.body.length, 2)
})

test('a specific note is within the returned notes', async () => {
  const response = await api.get('/api/notes')
  
  expect(response.body[0].content).toBe('initialNotes[0].content');
//   const contents = response.body.map(e => e.content)
//   assert.strictEqual(contents.includes('HTML is easy'), true)
})

afterAll(async () => {
  await mongoose.connection.close()
})