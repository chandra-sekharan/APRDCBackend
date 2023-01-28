const mongoose = require('mongoose')

const schema = new mongoose.Schema({
 
    fname:{
        type:String,
        required:true,

    },
    hallnumber:{
        type:String,
        required:true,
    },
    branch:{
        type:String,
        required:true,
    },
    yearofpass:{
        type:String,
        required:true,
    },
    designation:{
        type:String,
        
    },
    email:{
        type:String,
        required:true,
    },
    mnumber:{
        type:String,
        required:true,
    },
    image: {
        type:String,
        required:true,
    },
    datecreated:Date,
    dateupdated:Date
})

const students = new mongoose.model("students",schema)

module.exports = students