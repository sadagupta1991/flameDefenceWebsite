require('dotenv').config();
const mongoose = require('mongoose');
const md5 = require('md5');



const UserSchema = new mongoose.Schema({
    email:String,
    password:String
});



module.exports= mongoose.model('User',UserSchema);
