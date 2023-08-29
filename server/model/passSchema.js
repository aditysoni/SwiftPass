// import mongoose from "mongoose";
const mongoose = require('mongoose')  ;


const PassSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    rollNo : {
        type : String , 
        required:true 
    } , 
    email: { 
        
        type: String,
        default: false
    },
   
    purpose:{
    type:String 
    
    } , 
    time : {
        type: Date
    }, 
    returnTime : {
        type : String
    }
})

const Pass = mongoose.model('Pass', PassSchema);

module.exports = Pass ;