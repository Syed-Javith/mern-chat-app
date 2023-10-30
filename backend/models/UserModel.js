const mongoose = require('mongoose');
const chat = require('./ChatSchema');

const userSchema = new mongoose.Schema({
    name: String,
    email: String ,
    password : String ,
    chats : [
        {
            type : mongoose.Schema.Types.ObjectId ,
            ref : 'chat'
        }
    ]
})

userSchema.add({
    chats : [chat.schema] ,
    password : String
})

const User = new mongoose.model('user',userSchema);

module.exports = User;