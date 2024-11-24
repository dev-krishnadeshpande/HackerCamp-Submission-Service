const mongoose = require('mongoose');
const { DB_CONNECTION } = require('./serverConfig');

async function connectToDB() {
  try {
    await mongoose.connect(DB_CONNECTION);
    console.log('Connected to the db!');
  }
  catch (error) {
    console.log('error', error);
  }
}

module.exports = connectToDB;
