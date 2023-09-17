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
        
    },
   
    purpose:{
    type:String 
    
    } , 
    returnTime : {
        type : String
    },

    status: {
        type:String , 
        enum:['authorized ' , 'notAuthorized' , 'pending'] ,
        default: 'pending' 
    }
})

const Pass = mongoose.model('Pass', PassSchema);

module.exports = Pass ;