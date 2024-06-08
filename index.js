const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const cors = require('cors');
const routes = require('./routes/routes'); 

app.use(bodyparser.urlencoded({extended:true}));
app.use(cors())
app.use(bodyparser.json())
app.get('/' ,(req,res)=>{
    res.send("Hello World")
} )

mongoose.connect('mongodb://localhost:27017/todolist', {useNewUrlParser: true})
.then(()=>console.log('connected!'))
.catch((err)=>console.log(err, "mongodb error"));
routes(app);
app.listen(port,()=>{
    console.log(`The Server is runing on port ${port}`);
});