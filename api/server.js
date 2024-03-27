const dotenv = require('dotenv');
const mongoose = require('mongoose');
const app = require('./app');

dotenv.config({ path: './config.env' });
const DB = process.env.MONGODB_URL;

mongoose
  .connect(DB, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((conn) => {
    console.log('Connected to MongoDB');
  });

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Backend running on port ${port}`);
});
