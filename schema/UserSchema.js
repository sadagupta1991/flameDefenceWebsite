require('dotenv').config();
const mongoose = require('mongoose');
const encrypt = require('mongoose-encryption');


console.log(process.env.API_KEY);

const UserSchema = new mongoose.Schema({
    email:String,
    password:String
});


UserSchema.plugin
(encrypt,{secret:process.env.SECRET,encryptedFields:["password"]});

module.exports= mongoose.model('User',UserSchema);
