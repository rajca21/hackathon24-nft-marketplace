const express = require('express');
const morgan = require('morgan');

const nftsRouter = require('./routes/nftsRoute.js');
const usersRouter = require('./routes/usersRoute.js');

const app = express();
app.use(express.json());
app.use(morgan('dev'));

app.use('/api/v1/nfts', nftsRouter);
app.use('/api/v1/users', usersRouter);

const port = 8000;
app.listen(port, () => {
  console.log(`Backend running on port ${port}`);
});
