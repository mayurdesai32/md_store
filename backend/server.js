require('dotenv').config({ path: './utils/config.env' });
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();

// for handling uncaught Exception
process.on('uncaughtException', (err) => {
  console.log(`Error:${err.message}`);
  console.log(`shutting down the server due to uncaught Exception`);
  process.exit(1);
});

// connencting database
const connectdatabase = require('./db/mongodb');
connectdatabase();
// all middleware

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());
// all routes
const product_router = require('./routes/product_routes');
const order_routes = require('./routes/order_routes');
const user_routes = require('./routes/user_routes');

app.use('/api/product', product_router);
app.use('/api/order', order_routes);
app.use('/api/user', user_routes);

// Error Middleware
const errorMiddleware = require('./error_handler/errorMiddleware');
app.use(errorMiddleware);

PORT = process.env.PORT || 8000;
ENV = process.env.NODE_ENV || 'DEVELOPMENT';

const server = app.listen(PORT, () => {
  console.log(`SERVER RUNNING ON PORT ${PORT} AND IN ${ENV} MODE`);
});

// For unhandled promise rejection

process.on('unhandledRejection', (err) => {
  console.log(`Error:${err.message}`);
  console.log(`Shutting down the server due to Unhandled Promise Rejection`);
  server.close(() => {
    process.exit(1);
  });
});
