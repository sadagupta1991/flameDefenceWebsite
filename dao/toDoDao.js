const Todo = require('../schema/ToDo');

module.exports = {

    saveNewRecord: async (item)=>{
        try{
            const newTodoItem = new Todo({name:item});
            await newTodoItem.save();
        } catch(error) {
            console.log(" tododao -> saveNewRecord",error)
        }
    },
    findByName: async()=>{
        try{
            const toDOListResult = await Todo.find({});
            return toDOListResult;
        }catch(error){
            console.log("todoDao -> findByName", error);
        }
    },
    deleteRecord: async(item)=>{
        try{
            const todoDeleteResult = await Todo.deleteOne({name:item});
            return todoDeleteResult;
        }catch(error){
            console.log("todoDao -> deleteRecord", error);
        }
    },
    updateRecord:async(name, updatedValue)=>{
        try{
            const toDoUpdateList = await Todo.updateOne({name},updatedValue);
            return toDoUpdateList;
        }catch(error){
            console.log("todoDao -> updateRecord", error);
        }
    }
} 