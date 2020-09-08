const express = require('express');
const router = express.Router();
const db =  require('../db');

users = [
    {id: 1, username: "Kofi", password: "kofi"},
    {id: 2, username: "Ama", password: "Ama"}
]

router.get('/users', async (req, res) => {
    try{
        let results = await db.allUsers();
         res.json(results);
    }catch(e){
        console.log(e);
        res.status(500);
    }
});

router.get('/users/:id', async (req,res) => {
    try{
        let result = await db.getUser(req.params.id);
         res.json(result).status(200);
    }catch(e){
        console.log(e);
        res.status(500);
    }
})

router.post('/users', async (req, res) => {
    try{
        userData = req.body;
        await db.addUser(userData.username,userData.email,userData.password);
         res.send("User Created Successfully").status(201);
    }catch(e){
        console.log(e);
        res.status(500);
    }
});


module.exports = router;