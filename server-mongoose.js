 /**
 * Created by lcom57 on 1/1/18.
 */
const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
mongoose.promise = global.promise;
mongoose.connect('mongodb://localhost:27017/todoApp');

let todos_model = require('./models/todos_model');
let user_model = require('./models/user_model');

let app = express();
app.use(bodyParser.json());
app.post('/todo',(req,res)=>{
   //console.log(req.body);
   let newtask = new todos_model.Todo(req.body);
   newtask.save().then((doc)=>{res.send(doc)}).catch((err)=>{res.send(err.message);});
});
app.listen(8081,()=>{console.log(`listening on 8080..`);});