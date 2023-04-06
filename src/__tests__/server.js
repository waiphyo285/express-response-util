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

server.post('/created', (req, res) => {
  res.created('Hello world, test cases are running now');
});

server.post('/noContent', (req, res) => {
  res.noContent('Hello world, test cases are running now');
});

server.post('/unauthorized', (req, res) => {
  res.unauthorized('Hello world, test cases are running now');
});

server.get('/forbidden', (req, res) => {
  res.forbidden('Hello world, test cases are running now');
});

server.get('/notFound', (req, res) => {
  res.notFound('Hello world, test cases are running now');
});

server.get('/notAllowed', (req, res) => {
  res.notAllowed('Hello world, test cases are running now');
});

server.post('/notAcceptable', (req, res) => {
  res.notAcceptable('Hello world, test cases are running now');
});

server.get('/unauthorizedProxy', (req, res) => {
  res.unauthorizedProxy('Hello world, test cases are running now');
});

server.get('/requestTimeout', (req, res) => {
  res.requestTimeout('Hello world, test cases are running now');
});

server.post('/conflict', (req, res) => {
  res.conflict('Hello world, test cases are running now');
});

server.post('/invalid', (req, res) => {
  res.invalid('Hello world, test cases are running now');
});

server.get('/serverError', (req, res) => {
  res.serverError('Hello world, test cases are running now');
});

server.get('/notImplemented', (req, res) => {
  res.notImplemented('Hello world, test cases are running now');
});

server.get('/badGateway', (req, res) => {
  res.badGateway('Hello world, test cases are running now');
});

server.get('/unavailable', (req, res) => {
  res.unavailable('Hello world, test cases are running now');
});

server.get('/gatewayTimeout', (req, res) => {
  res.gatewayTimeout('Hello world, test cases are running now');
});

server.get('/notSupported', (req, res) => {
  res.notSupported('Hello world, test cases are running now');
});

module.exports = server.listen(3000);
