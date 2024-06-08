const toDoController = require('../controller/toDoController');
const usercontroller = require("../controller/userController");

module.exports = app =>{
    app.use('/todo',toDoController);
    app.use('/user',usercontroller);
}