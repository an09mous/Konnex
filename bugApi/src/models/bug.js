const mongoose = require("mongoose");
const validator = require("validator");

const bugSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:[true,"Emial id is already present"],
        validator(value){
            if(validator.isEmail(value)){
                throw new Error("Invalid Email");
            }
        }
    },
    key:{
        type:String,
        required:true,
    },
    errorType:{
        type:String,
        required:true
    },
    text:{
        type:String,
        required:true
    }
})
// we will create a new collection
const Bug = new mongoose.model('Bug',bugSchema);
module.exports = Bug;