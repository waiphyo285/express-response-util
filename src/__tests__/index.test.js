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

describe('POST /created', () => {
  it('returns data', (done) => {
    request
      .post('/created')
      .expect(201, {
        status: '201',
        message: 'Created',
        description:
          'indicates that the request has been fulfilled and has resulted in one or more new resources being created.',
        data: 'Hello world, test cases are running now',
      })
      .end(done);
  });
});

describe('POST /noContent', () => {
  it('returns data', (done) => {
    request.post('/noContent').expect(204, {}).end(done);
  });
});

describe('POST /unauthorized', () => {
  it('returns data', (done) => {
    request
      .post('/unauthorized')
      .expect(401, {
        status: '401',
        message: 'Unauthorized',
        description:
          'indicates that the request has not been applied because it lacks valid authentication credentials for the target resource.',
        error: 'Hello world, test cases are running now',
      })
      .end(done);
  });
});

describe('GET /forbidden', () => {
  it('returns data', (done) => {
    request
      .get('/forbidden')
      .expect(403, {
        status: '403',
        message: 'Forbidden',
        description: 'indicates that the server understood the request but refuses to authorize it.',
        error: 'Hello world, test cases are running now',
      })
      .end(done);
  });
});

describe('GET /notFound', () => {
  it('returns data', (done) => {
    request
      .get('/notFound')
      .expect(404, {
        status: '404',
        message: 'Not Found',
        description:
          'indicates that the origin server did not find a current representation for the target resource or is not willing to disclose that one exists.',
        error: 'Hello world, test cases are running now',
      })
      .end(done);
  });
});

describe('GET /notAllowed', () => {
  it('returns data', (done) => {
    request
      .get('/notAllowed')
      .expect(405, {
        status: '405',
        message: 'Method Not Allowed',
        description:
          'indicates that the method specified in the request-line is known by the origin server but not supported by the target resource.',
        error: 'Hello world, test cases are running now',
      })
      .end(done);
  });
});

describe('GET /notAcceptable', () => {
  it('returns data', (done) => {
    request
      .post('/notAcceptable')
      .expect(406, {
        status: '406',
        message: 'Not Acceptable',
        description:
          'indicates that the target resource does not have a current representation that would be acceptable to the user agent, according to the proactive negotiation header fields received in the request, and the server is unwilling to supply a default representation.',
        error: 'Hello world, test cases are running now',
      })
      .end(done);
  });
});

describe('GET /unauthorizedProxy', () => {
  it('returns data', (done) => {
    request
      .get('/unauthorizedProxy')
      .expect(407, {
        status: '407',
        message: 'Proxy Authentication Required',
        description:
          'is similar to 401 (Unauthorized), but indicates that the client needs to authenticate itself in order to use a proxy.',
        error: 'Hello world, test cases are running now',
      })
      .end(done);
  });
});

describe('GET /requestTimeout', () => {
  it('returns data', (done) => {
    request
      .get('/requestTimeout')
      .expect(408, {
        status: '408',
        message: 'Request Timeout',
        description:
          'indicates that the server did not receive a complete request message within the time that it was prepared to wait.',
        error: 'Hello world, test cases are running now',
      })
      .end(done);
  });
});

describe('POST /conflict', () => {
  it('returns data', (done) => {
    request
      .post('/conflict')
      .expect(409, {
        status: '409',
        message: 'Conflict',
        description:
          'indicates that the request could not be completed due to a conflict with the current state of the resource.',
        error: 'Hello world, test cases are running now',
      })
      .end(done);
  });
});

describe('GET /serverError', () => {
  it('returns data', (done) => {
    request
      .get('/serverError')
      .expect(500, {
        status: '500',
        message: 'Internal Server Error',
        description:
          'indicates that the server encountered an unexpected condition that prevented it from fulfilling the request.',
        error: 'Hello world, test cases are running now',
      })
      .end(done);
  });
});

describe('POST /invalid', () => {
  it('returns data', (done) => {
    request
      .post('/invalid')
      .expect(422, {
        status: '422',
        message: 'Unprocessable Entity',
        description:
          'means the server understands the content type of the request entity (hence a 415(Unsupported Media Type) status code is inappropriate), and the syntax of the request entity is correct (thus a 400 (Bad Request) status code is inappropriate) but was unable to process the contained instructions.',
        error: 'Hello world, test cases are running now',
      })
      .end(done);
  });
});

describe('GET /notImplemented', () => {
  it('returns data', (done) => {
    request
      .get('/notImplemented')
      .expect(501, {
        status: '501',
        message: 'Not Implemented',
        description: 'indicates that the server does not support the functionality required to fulfill the request.',
        error: 'Hello world, test cases are running now',
      })
      .end(done);
  });
});

describe('GET /badGateway', () => {
  it('returns data', (done) => {
    request
      .get('/badGateway')
      .expect(502, {
        status: '502',
        message: 'Bad Gateway',
        description:
          'indicates that the server, while acting as a gateway or proxy, received an invalid response from an inbound server it accessed while attempting to fulfill the request.',
        error: 'Hello world, test cases are running now',
      })
      .end(done);
  });
});

describe('GET /unavailable', () => {
  it('returns data', (done) => {
    request
      .get('/unavailable')
      .expect(503, {
        status: '503',
        message: 'Service Unavailable',
        description:
          'indicates that the server is currently unable to handle the request due to a temporary overload or scheduled maintenance, which will likely be alleviated after some delay.',
        error: 'Hello world, test cases are running now',
      })
      .end(done);
  });
});

describe('GET /gatewayTimeout', () => {
  it('returns data', (done) => {
    request
      .get('/gatewayTimeout')
      .expect(504, {
        status: '504',
        message: 'Gateway Time-out',
        description:
          'indicates that the server, while acting as a gateway or proxy, did not receive a timely response from an upstream server it needed to access in order to complete the request.',
        error: 'Hello world, test cases are running now',
      })
      .end(done);
  });
});

describe('GET /notSupported', () => {
  it('returns data', (done) => {
    request
      .get('/notSupported')
      .expect(505, {
        status: '505',
        message: 'HTTP Version Not Supported',
        description:
          'indicates that the server does not support, or refuses to support, the protocol version that was used in the request message.',
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
