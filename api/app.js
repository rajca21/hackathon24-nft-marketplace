const express = require('express');
const morgan = require('morgan');

const nftsRouter = require('./routes/nftsRoute.js');
const usersRouter = require('./routes/usersRoute.js');

const app = express();
app.use(express.json());
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use('/api/v1/nfts', nftsRouter);
app.use('/api/v1/users', usersRouter);

module.exports = app;
