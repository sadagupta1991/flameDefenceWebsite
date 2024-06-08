const todoDao = require('../dao/toDoDao');

module.exports = {
    addNewItem: async(item)=>{
        try{
          return await todoDao.saveNewRecord(item)
        }catch(error){
            console.log("todoService -> addNewItem", error);
        }
    },
    getToDoList: async()=>{
        try{
           return await todoDao.findByName()
        }catch(error){
            console.log("todoService -> getToDoList", error);
        }
    },
    getToDoDeleteRecord: async(item)=>{
        try{
            return await todoDao.deleteRecord(item)
        }catch(error){
            console.log("todoService -> getToDoDeleteRecord", error);
        }
    },
    getupdateRecord: async(item,updatedValue)=>{        
        try{
            const updatedObj = { name:updatedValue } 
            return await todoDao.updateRecord(item,updatedObj)
        }catch(error){
            console.log("toDoServie -> getUpdateRecord",error);
        }
    }
}