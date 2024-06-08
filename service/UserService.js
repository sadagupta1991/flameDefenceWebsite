const userDao = require('../dao/userDao');
module.exports = {
    addNewUser:async(reqBody)=>{
        try{
            console.log("service",reqBody);
            return await userDao.createNewUser(reqBody);
        }catch(error){
            console.log("userService -> addNewUser", error);
        }
    }, 
    getLoggedInUser:async(reqBody)=>{
        try{
            const loggedIn = await userDao.findUserByEmail(reqBody.email);
            console.log("service file",loggedIn);
            if(loggedIn){
               if(loggedIn.password===reqBody.password){
                return true;
               }else{
                return false;
               }
            }
            return false;
        }catch(error){
            console.log("getLoggedInUser -> UserService",error);
        }
    }
}