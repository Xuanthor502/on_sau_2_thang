const connection = require("../config/database.js")
const User = require('../models/user.js')
const upLoadSingleFile = require('../services/filesService.js')

const getUserAPI = async(req,res)=>{
    let results= await User.find({});
    res.status(200).json({
        error:0,
        data:results
    })
}
const postUserAPI =async (req,res)=>{
    const email = req.body.email;
    const name = req.body.name;
    const city = req.body.city;
    console.log(email)
   let results=await User.create({
        email: email,
        name: name,
        city:city
    })
    res.status(200).json({
        error:0,
        data:results
    })
}

const putUserAPi = async(req,res)=>{
    const id = req.body.id;
    const email = req.body.email;
    const name = req.body.name;
    const city = req.body.city
   let results= await User.updateOne({_id:id},{email:email,name:name,city:city})
     res.status(200).json({
        error:0,
        data:results
     })
}

const deleteUserAPI = async(req,res)=>{
    const id = req.body.id;
   let results= await User.deleteOne({
        _id:id
    })
    res.status(200).json({
         error:0,
        data:results
    })
}


const postUpLoadFile = async(req,res)=>{
       let image= req.files.image;
       console.log(image)
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
      }
        let results= await upLoadSingleFile(image)
        console.log(results)
      res.send('File uploaded!')
  }

module.exports= { getUserAPI, postUserAPI,putUserAPi,deleteUserAPI, postUpLoadFile}