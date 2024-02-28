const mongoose = require('mongoose')

const programSchema= new mongoose.Schema({
    title :{
        type: String,
        required : true
    }
},{timestams: true})

module.exports = mongoose.model("Program", programSchema)