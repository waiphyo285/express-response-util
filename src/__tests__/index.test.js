const supertest = require('supertest');
const server = require('./server');

const request = supertest(server);

describe('GET /success', () => {
  it('returns data', (done) => {
    request
      .get('/success')
      .expect(200, {
        status: '200',
        message: 'OK',
        description: 'indicates that the request has succeeded.',
        data: 'Hello world, test cases are running now',
      })
      .end(done);
  });
});

describe('GET /failed', () => {
  it('returns data', (done) => {
    request
      .get('/failed')
      .expect(400, {
        status: '400',
        message: 'Bad Request',
        description:
          'indicates that the server cannot or will not process the request because the received syntax is invalid, nonsensical, or exceeds some limitation on what the server is willing to process.',
        error: 'Hello world, test cases are running now',
      })
      .end(done);
  });
});

describe('Terminate server', () => {
  it('closes the server', (done) => {
    server.close(done);
  });
});
