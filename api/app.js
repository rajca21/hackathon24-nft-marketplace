const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');

const nftsRouter = require('./routes/nftsRoute.js');
const usersRouter = require('./routes/usersRoute.js');
const authRouter = require('./routes/authRoute.js');
const collectionsRouter = require('./routes/collectionsRoute.js');
const bidsRouter = require('./routes/bidsRoute.js');

const app = express();
app.use(express.json());
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.use(
  helmet.crossOriginResourcePolicy({
    policy: 'cross-origin',
  })
);
app.use(cors());

app.use('/api/v1/nfts', nftsRouter);
app.use('/api/v1/users', usersRouter);
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/collections', collectionsRouter);
app.use('/api/v1/bids', bidsRouter);

module.exports = app;
