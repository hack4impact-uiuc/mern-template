const app = require('../src/app');
const mongoose = require('mongoose');
const request = require('supertest');

afterAll(async () => {
  await mongoose.connection.close();
});

describe('GET / ', () => {
  test('API should return working message', async () => {
    const response = await request(app).get('/');
    expect(response.body).toEqual('API working!');
    expect(response.statusCode).toBe(200);
  });
});

describe('GET /api/home/ ', () => {
  test('API should return home text', async () => {
    const response = await request(app).get('/api/home/');
    expect(response.body.message).toEqual('Successfully returned home text');
    expect(response.body.result).toEqual(
      "You've connected the database! Isn't it so beautiful???",
    );
    expect(response.statusCode).toBe(200);
  });
});
