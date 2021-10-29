const mongoose = require('mongoose');
//CONNECT USING .ENV
mongoose.connect(process.env.MONGODB_URI, {useNewURLParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
//ERROR MESSAGE
db.on('error', console.error.bind(console, 'connection error'));
//SUCCESS MESSAGE
db.once('open', function(){
    console.log('connected');
});