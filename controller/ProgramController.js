const ProgramModel = require("../Models/ProgramModel")

exports.addprogram = async (req, res) =>{
    let programToAdd = await ProgramModel.create({
        title: req.body.title

    })
    if(!programToAdd){
        return res. status(400).json({error:"something went wrong"})
    }
    res.send(programToAdd)
}