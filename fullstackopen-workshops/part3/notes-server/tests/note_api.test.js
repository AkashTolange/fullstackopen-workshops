// const { test, after } = require('node:test')

const mongoose = require("mongoose");
const supertest = require("supertest");
const app = require("../app");

const Note = require("../models/note");
const helpers = require("./tests_helper");
//wrap garyo app lae

//no need as it is in configuration file mw xa
// const initialNotes = [
//   {
//     content: 'HTML is easy',
//     important: false,
//   },
//   {
//     content: 'Browser can execute only JavaScript',
//     important: true,
//   },
// ]

//beforeEach function used here
// beforeEach(async () => {
//   await Note.deleteMany({})
//   let noteObject = new Note(helpers.initialNotes[0])
//   await noteObject.save()
//   noteObject = new Note(helpers.initialNotes[1])
//   await noteObject.save()
// })

//now optimizing the beforeEach function  using promise.all
beforeEach(async () => {
  await Note.deleteMany({});

  const noteObjects = helpers.initialNotes.map((note) => new Note(note));
  const promiseArray = noteObjects.map((note) => note.save());
  await Promise.all(promiseArray);
});

const api = supertest(app);

describe("Testing GET method", () => {
  test("notes are returned as json", async () => {
    await api
      .get("/api/notes")
      .expect(200)
      // .expect('Content-Type', 'application/json; charset=utf-8')
      // .expect('Content-Type', /application\/json/)
      .expect("Content-Type", /application\/json/);
  }, 10000); // 10 seconds timeout

  test("all notes are returned", async () => {
    // const response = await api.get('/api/notes')
    const response = await helpers.notesInDb();

    expect(response).toHaveLength(helpers.initialNotes.length);
    // expect(response.body.length).toBe(3)
    //   assert.strictEqual(response.body.length, 2)
  });

  test("a specific note is within the returned notes", async () => {
    // const response = await api.get('/api/notes')
    const response = await helpers.notesInDb();

    const contents = response.map((note) => note.content);
    expect(contents).toContain(helpers.initialNotes[0].content);
    // expect(response[0].content).toBe(helpers.initialNotes[0].content);
    // expect(response.body[0].content).toBe(helpers.initialNotes[0].content);
    //   const contents = response.body.map(e => e.content)
    //   assert.strictEqual(contents.includes('HTML is easy'), true)
  });
});

//tests for post ok and for testing post method
describe("Testing POST method", () => {
  test("a valid note can be added", async () => {
    const newNote = {
      content: "async/await simplifies making async calls",
      important: true,
    };

    await api
      .post("/api/notes")
      .send(newNote)
      .expect(201)
      .expect("Content-Type", /application\/json/);

    const response = await api.get("/api/notes");

    const contents = response.body.map((r) => r.content);

    expect(response.body).toHaveLength(helpers.initialNotes.length + 1);
    expect(contents).toContain("async/await simplifies making async calls");
    // assert.strictEqual(response.body.length, initialNotes.length + 1)

    // assert(contents.includes('async/await simplifies making async calls'))
  }); 

  test("a note without content cannot  be added ", async () => {
    const newNote = {
      // content: 'async/await simplifies making async calls',
      important: true,
    };

    await api.post("/api/notes").send(newNote).expect(400);
    // .expect('Content-Type', /application\/json/)

    const response = await api.get("/api/notes");

    const contents = response.body.map((r) => r.content);

    expect(response.body).toHaveLength(helpers.initialNotes.length);
    // expect(contents).toContain('async/await simplifies making async calls');

    // assert.strictEqual(response.body.length, initialNotes.length + 1)

    // assert(contents.includes('async/await simplifies making async calls'))
  });
});

afterAll(async () => {
  await mongoose.connection.close();
});
