/**
 * Created by lcom57 on 1/1/18.
 */
let mongoose=require('mongoose');
let user = mongoose.model('user',
    {
        username:{
            type:String,
            required:true,
            minlength:1,
            trim:true
        },
        email:{
            type:String,
            required:true,
            minlength:5,
            trim:true
        }
    }
);
module.exports={
    user
};