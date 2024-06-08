const userService = require('../service/UserService')
const express = require('express');
const router = express.Router()

router.post('/adduser', async(req,res)=>{
    try{
        // const {email,password} = req.body;
        console.log("req body", req.body);
        const newUser = await userService.addNewUser(req.body)
        if(newUser){
            res.status(200).json({msg:'user is created', newUser})
        }else{
            res.status(500).json({msg:'cannot create user,please check data'})
        }
    }catch(error){
        res.status(500).json({msg:'something went wrong'})
        console.log('userController ->/adduser', error);
    }
});

router.post('/login', async(req,res)=>{
    try{
        const getLoggedIn = await userService.getLoggedInUser(req.body)
        console.log("controller file", getLoggedIn);5
        if(getLoggedIn){
            res.status(200).json({msg:'user LoggedIn'})
        }else{
            res.status(500).json({msg:"invalid Credentials user Does not exist"})
        }        
    }catch(error){
        res.status(500).json({msg:'something went wrong'})
    }
})

module.exports = router