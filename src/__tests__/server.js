const express = require('express');
const { responseUtils } = require('../../lib/index');

const server = express();

// Use the helper middleware
server.use(responseUtils);
server.use(express.json({ limit: '50mb' }));
server.use(express.urlencoded({ extended: true }));

// Define routes
server.get('/success', (req, res) => {
  res.success('Hello world, test cases are running now');
});

server.get('/failed', (req, res) => {
  res.failed('Hello world, test cases are running now');
});

// server.post('/create', (req, res) => {
//   res.respondCreated(null, 'Resource created');
// });

// server.post('/bad-request', (req, res) => {
//   res.fail('Bad request');
// });

// server.delete('/delete', (req, res) => {
//   res.respondDeleted(null, 'Resource deleted');
// });

// server.put('/update', (req, res) => {
//   res.respondUpdated(null, 'Resource updated');
// });

// server.put('/no-content', (req, res) => {
//   res.respondNoContent('No Content');
// });

// server.get('/unauthorized', (req, res) => {
//   res.failUnauthorized();
// });

// server.get('/forbidden', (req, res) => {
//   res.failForbidden();
// });

// server.get('/not-found', (req, res) => {
//   res.failNotFound();
// });

// server.post('/validation-error', (req, res) => {
//   res.failValidationError(['Error 1', 'Error 2', 'Error 3']);
// });

// server.post('/conflict', (req, res) => {
//   res.failResourceExists();
// });

// server.get('/gone', (req, res) => {
//   res.failResourceGone();
// });

// server.get('/overload', (req, res) => {
//   res.failTooManyRequests();
// });

// server.post('/server-error', (req, res) => {
//   res.failServerError();
// });

module.exports = server.listen(3000);
