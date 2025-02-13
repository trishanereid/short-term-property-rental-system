require('dotenv').config();
const mongoose = require('mongoose');
const app = require('./app');

const db = process.env.DATABASE_URI.replace(
  '<db_password>',
  process.env.DATABASE_PASSWORD,
);

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Database connection is succsessful');
  });

app.listen(process.env.PORT || 3000, () => {
  console.log(`The server is started on port ${process.env.PORT}`);
});
