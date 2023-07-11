const connection = require("../config/database.js")
const User = require('../models/user.js')
const sample = (req, res) => {
        res.render("sample.ejs")
      }

const  getHome = (req,res)=>{
     res.render("home.ejs")
}
const  getUser = (req,res)=>{
    res.render("create.ejs")
}

const port_a_user =async (req,res)=>{
    const email = req.body.email;
    const name = req.body.name;
    const city = req.body.city;
    console.log(email)
   await User.create({
        email: email,
        name: name,
        city:city
    })
    res.send("oki la con de")
}
const get_read_user = async(req,res)=>{
    let results= await User.find({});
    res.render("read.ejs",{listUser: results})
}
const getUpdateUser = async(req,res)=>{
    const UsersId =  req.params.id;
    let user= await User.findById(UsersId).exec()
     res.render("update.ejs",{listUser: user})
}
const post_update_a_user = async(req,res)=>{
    const id = req.body.id;
    const email = req.body.email;
    const name = req.body.name;
    const city = req.body.city
    await User.updateOne({_id:id},{email:email,name:name,city:city})
    res.send("oki la con de")
}

const post_delete_a_user = async(req,res)=>{
    let UsersId =  req.params.id;
    
    let user= await User.findById(UsersId).exec()
    res.render("delete.ejs",{listUser: user})
}
const post_success_delete_a_user = async(req,res)=>{
    const id = req.body.id;
    await User.deleteOne({
        _id:id
    })
    res.send("oki la con de")
}
module.exports= {
        sample,getHome,getUser,port_a_user,get_read_user,getUpdateUser,
        post_update_a_user,post_delete_a_user,
        post_success_delete_a_user
}