// import mongoose from "mongoose";
const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    rollNo :{
        type : String , 

    } ,
    email: { 
        
        type: String,
        
    },
    password: {
      type: String , 
      
    }, 
    phone : {
      type: Number
    } , 

    role :
    {
      type:String
    } ,
    NoOfGoings : {
      type :  Number, 
      default : 0 
    }
    
})

const student = mongoose.model('student', UserSchema);

module.exports = student ;