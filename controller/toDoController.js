const toDoService = require('../service/todoService');
const express = require('express');
const router = express.Router()

router.post('/insert',async(req,res)=>{
    try{
        const {item} = req.body;
        console.log("reqBody", item)
       const newToDoItem = await toDoService.addNewItem(req.body.item)
       if(!newToDoItem){
        res.status(200).json({msg:'item is added'})
       }else{
        res.status(500).json({msg:'cannot insert data,please check data'})
       }
    }catch(error){
        res.status(500).json({msg:'something went wrong'})
        console.log('toDoController -> /insert', error);
    }
});
router.get('/todoList',async(req,res)=>{
    try{
        const newToDoList = await toDoService.getToDoList()
        console.log("gettodolist", newToDoList);
        if(newToDoList){
            res.status(200).json({newToDoList})
        }else{
            res.status(500).json({msg:'cannot fetch list'})
        }
    }catch(error){
        res.status(500).json({msg:'something went wrong'})
        console.log('toDoController -> /todoList', error);
    }
    
}),
router.post('/deleteToDo',async(req,res)=>{
    try{
        const {item} = req.body;
        const deleteToDOList = await toDoService.getToDoDeleteRecord(req.body.item);
        console.log("deletetodolist", deleteToDOList);
        if(deleteToDOList){
            res.status(200).json({deleteToDOList})
        }else{
            res.status(500).json({msg:"cannot delete list"})
        }
    }catch(error){
        res.status(500).json({msg:"something went wrong"})
    }
}),
router.post('/updateToDo', async(req,res)=>{
    try{
        const {item,updatedValue} = req.body;
        const updateToDoList = await toDoService.getupdateRecord(item,updatedValue);
        console.log("updateToDoList",updateToDoList);
        if(updateToDoList){
            res.status(200).json({msg:'item is updated'})
        }else{
            res.status(500).json({msg:"cannot update list"})
        }
    }catch(error){
        res.status(500).json({msg:"something went wrong"})
    }
}),
router.post('/register', async(req,res)=>{
    try{

    }catch(error){

    }
})

module.exports = router
