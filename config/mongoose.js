//require the library
const mongoose = require('mongoose');
//connect to database
mongoose.connect('mongodb+srv://Raj:qwertyuiop@cluster0.dinpclz.mongodb.net/?retryWrites=true&w=majority');
//acquire the connection
const db = mongoose.connection;
//error
db.on('error', console.error.bind(console,"Connection Error "));
//successful
db.once('open',function(){
    console.log('Connected to database');

});

module.exports = db;
