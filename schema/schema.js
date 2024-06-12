const s=require('mongoose')

const sch_const= new s.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    job:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    cpassword:{
        type:String,
        required:true
    },

})

const model_con=s.model('monday',sch_const);
module.exports=model_con