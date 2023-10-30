const express = require('express');
const User = require('../models/UserModel');

const router = express.Router()

router.get('/chats', async (req,res)=>{
   // if(req.isAuthenticated()){
      try{
         const response  = await  User.aggregate([
           {
              $unwind : '$chats'
           },
           {
              $sort : {
                 'chats.id' : 1
              }
           },
           {
            $project : {
               password : 0
            }
           }
         ])
         res.status(200).send(response)
        }catch(err){
         res.status(400).send(err)
        }
   // }
} )


module.exports = router