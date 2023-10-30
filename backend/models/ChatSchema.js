const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
    id : mongoose.Types.ObjectId ,
    message : String ,
    time : Date
})

const chat = new mongoose.model('chat',chatSchema)

module.exports = chat;