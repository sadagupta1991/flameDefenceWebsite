const User = require('../schema/UserSchema');
const md5 = require('md5');

module.exports = {
    createNewUser:async(reqBody)=>{
        try{
            console.log('Dao',reqBody);
            const newUser = new User({
                email:reqBody.email,
                password:md5(reqBody.password)
            });
            return await newUser.save();
        }catch(error){
            console.log("userDao ->createNewUser",error);
        }
    },
    findUserByEmail: async (email) =>{
        try{
            const value = await User.findOne({email})
            console.log("Dao file",value);
            return value;
        }catch(error){
            console.log(error);
        }
    },
    // findByPassword: async (password) => {
    //     try{
    //         await User.findOne()
    //     }catch(error){

    //     }
    // }
}