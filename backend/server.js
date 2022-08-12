require('dotenv').config({ path: './utils/config.env' });
const express = require('express');
console.log('helo');
const app = express();
console.log('hello');
PORT = process.env.PORT || 8000;
console.log('hello');
app.listen(PORT, () => {
  console.log(`SERVER RUNNING ON PORT ${PORT}`);
});
