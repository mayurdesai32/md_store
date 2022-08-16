mongoose = require('mongoose');
const connectdatabase = () => {
  mongoose.connect(process.env.mongodb).then(() => {
    console.log('connected to database');
  });
};

module.exports = connectdatabase;
