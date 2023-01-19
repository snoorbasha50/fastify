const mongoose=require('mongoose')

const userDetails=new mongoose.Schema({
    userFirst:{
        type:String,
        required:true
    },
    userLast:{
        type:String,
        required:true
    },
    userEmail:{
        type:String,
        required:true

    },
    userPhone:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model("Information",userDetails)