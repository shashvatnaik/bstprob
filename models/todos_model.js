/**
 * Created by lcom57 on 1/1/18.
 */
let mongoose=require('mongoose');
let Todo = mongoose.model('todos' ,
    {
        task:{
            type:String,
            required:true,
            minlength:5,
            trim:true
        },
        status:{
            type:Boolean,
            default:false
        },
        completedAt:{
            type:Number,
            default:null
        }
    }
);
module.exports={
    Todo
}