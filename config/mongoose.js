//require the library
const mongoose = require('mongoose');
//connect to database
mongoose.connect('mongodb://127.0.0.1:27017/todos');
//acquire the connection
const db = mongoose.connection;
//error
db.on('error', console.error.bind(console,"Connection Error "));
//successful
db.once('open',function(){
    console.log('Connected to database');

});

module.exports = db;