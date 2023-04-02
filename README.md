# express-response-util

This package offers a set of convenient and easy-to-use utility functions for building simple and consistent API responses in Express applications. These utilities can help developers avoid repetitive coding tasks when creating response payloads, and ensure that responses are formatted consistently across different parts of the application.

## Getting Started

To install `npm i express-response-util` and can be `require` or `import` from your Node.JS application.

```
// CommonJS
const { responseUtils } = require("express-response-util");
```

```
// ES6
import { responseUtils } from "express-response-util";
```

## API

The module provides a middleware function `responseUtils` that can be used in your application. The middleware appends the following functions to the 'response' (or 'res') parameter that is passed to your routes:

.success(data, status, message)

- data: The required data must be either a string, object, array, or null.
- status: The optional HTTP code must be either a number or a string. (Default - 200)
- message: The optional message must be a string or an array of strings. (Default - OK)

.failed(error, status, message)

- error: The required error must be either a string, object, array, or null.
- status: The optional HTTP code must be either a number or a string. (Default - 400)
- message: The optional message must be a string or an array of strings. (Default - Bad Request)

## Examples

You can easily attach the middleware function to your Express object or an Express route. The following property is the one you'll frequently use:

```js
const express = require('express');
const { responseUtils } = require('express-response-util');

const app = express();

// use the middleware
app.use(responseUtils);

app.get('/hello', function (req, res) {
  res.success('You are welcome!');
});

app.post('/check-in', function (req, res) {
  res.failed('Can not verify you!');
});
```

```ts
import express, { Application } from 'express';
import { responseUtils } from 'express-response-util';

const app: Application = express();

// use the middleware
app.use(<any>responseUtils);

app.get('/hello', function (req: Request, res: Response | any) {
  res.success('You are welcome!');
});

app.post('/check-in', function (req: Request, res: Response | any) {
  res.failed('Can not verify you!');
});
```

```bash
// Success response
{

    "status": "200",
    "message": "OK",
    "description": "indicates that the request has succeeded.",
    "data": "You are welcome!"
}

// Failed response
{

    "status": "400",
    "message": "Bad Request",
    "description": "indicates that the server cannot or will not process ...",
    "error": "Can not verify you!",
}
```

## Contribution

If you have ideas for new features or notice any bugs that you can fix, please visit our GitHub repository to suggest changes and create pull requests. Thank you in advance for your contributions!
