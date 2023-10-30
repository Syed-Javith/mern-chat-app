const express = require('express');
const User = require('../models/UserModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const router = express.Router();

router.post('/auth/login', async (req, res) => {
    const {
        email,
        password
    } = req.body;

    try {
        const user = await User.findOne({
            email: email
        });

        if (user) {

            bcrypt.compare(password, user.password, (err, result) => {
                if (err) {
                    console.log(err);
                    res.status(500).send('Server error');
                } else if (result) {
                    console.log("matched");
                    const token = jwt.sign({
                        name: user.name,
                        email: user.email
                    }, 'MY_SECRET', {
                        expiresIn: '1h'
                    });
                    res.status(200).send({
                        token,
                        user
                    });
                } else {
                    res.status(401).send('Incorrect password');
                }
            });
        } else {
            console.log("user not found");
            res.status(404).send('User not found');
        }
    } catch (error) {
        console.log(error);
        res.status(500).send('Server error');
    }
});


router.post('/auth/register', async (req, res) => {
    const {  
        name,
        email,
        password
    } = req.body;

    try {
        const existingUser = await User.findOne({
            email: email
        });

        if (existingUser?.email) {
            res.status(409).send(existingUser);
        } else {
            bcrypt.hash(password, 10, async (err, hashedPassword) => {
                if (err) {
                    res.status(500).send('Password hashing error');
                } else {
                    const newUser = new User({
                        name: name,
                        email: email,
                        password: hashedPassword,
                        chats: []
                    });

                    try {
                        const savedUser = await newUser.save();
                        res.status(200).send(savedUser);
                    } catch (err) {
                        res.status(400).send(err);
                    }
                }
            });
        }
    } catch (error) {
        // Handle any errors here
        res.status(500).send('Server error');
    }
});

module.exports = router