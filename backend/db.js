const mongoose = require('mongoose');


connectoDB = () =>{
    mongoose.connect( 'mongodb+srv://Syed-Javith:RT6D5Hvu.m7h5TB@cluster0.negnedn.mongodb.net/chatapp')
.then((result) => {
    console.log('database connected');
}).catch((err) => {
    console.log(err);
});
}

module.exports = connectoDB;