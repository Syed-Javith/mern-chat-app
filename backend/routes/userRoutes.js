const express = require('express');
const User = require('../models/UserModel');
const { default: mongoose } = require('mongoose');

const router = express.Router();

router.get('/user/:email' , async ( req ,res )=> {
    const email = req.params.email;

    try{
       const response = await User.findOne( { email :  email } )
       res.status(200).send(response)
    }catch(err){
        res.status(400).send(err)
    }

})

router.post('/user/:email', async (req,res)=>{
    const email = req.params.email;

    const newChat = {
        id : new mongoose.Types.ObjectId() ,
        message : req.body.message ,
        time : Date.now()
    }

    try{
        const response = await User.updateOne( { email : email } , { $push : { chats : newChat } } )
        res.status(200).send(response);
    }catch(err){
        res.status(400).send(err)
    }

})

router.delete('/user/:email/:messageid', async (req,res)=>{
    const { email , messageid } = req.params;

    try{
        const response = await User.updateOne( { email : email },{ $pull : { chats : {id : messageid } } } )
        res.status(200).send(response)
    }catch(err){
        res.status(400).send(err)
    }

})

module.exports = router;