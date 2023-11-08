
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://root:root@cluster0.t4tlqrx.mongodb.net/?retryWrites=true&w=majority');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

module.exports = db;