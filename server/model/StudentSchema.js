// import mongoose from "mongoose";
const mongoose = require('mongoose')  ;


const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    // rollNo :{
    //     type : String , 
    //     required: true 

    // } ,
    // email: { 
        
    //     type: String,
    //     default: false
    // },
    password: {
      type: String , 
      required:true 
    }, 
    
})

const student = mongoose.model('student', UserSchema);

module.exports = student ;