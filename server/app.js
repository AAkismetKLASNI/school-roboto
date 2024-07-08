require('dotenv').config();

const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(cookieParser());
app.use('/', routes);

mongoose.connect(process.env.DB_CONNECTION).then(() => {
  app.listen(process.env.SERVER_PORT, () => {
    console.log(
      `SERVER STARTED ON THE ${process.env.SERVER_PORT} PORT (http://localhost:5500)`
    );
  });
});
