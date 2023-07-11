const connection = require("../config/database.js")
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
    console.log(name)
    console.log(city)
    let [results,feild]= await connection.query(
       `insert into Users(email,name,city) values(?,?,?)`,
        [email,name,city],
        )
        res.redirect('/')
}
const get_read_user = async(req,res)=>{
    let [results]= await connection.query( `select * from Users `)
    res.render("read.ejs",{listUser: results})
}
const getUpdateUser = async(req,res)=>{
    let UsersId =  req.params.id;
    let [results]= await connection.query( `select * from Users where id=?`,[UsersId],)
    let user=  results && results.length > 0? results[0] :{};
    res.render("update.ejs",{listUser: user})
}
const post_update_a_user = async(req,res)=>{
    const id = req.body.id;
    const email = req.body.email;
    const name = req.body.name;
    const city = req.body.city;
    await connection.query( `UPDATE Users
    SET email = ? , name= ?,city= ?
    WHERE id = ?; `,[email,name,city,id]) 
    res.send("oki la con de")
}

const post_delete_a_user = async(req,res)=>{
    let UsersId =  req.params.id;
    let [results]= await connection.query( `select * from Users where id=?`,[UsersId],)
    let user=  results && results.length > 0? results[0] :{};
    res.render("delete.ejs",{listUser: user})
}
const post_success_delete_a_user = async(req,res)=>{
    const id = req.body.id;
    await connection.query( `DELETE FROM Users where id=?; `,[id]) 
    res.send("oki la con de")
}
module.exports= {
        sample,getHome,getUser,port_a_user,get_read_user,getUpdateUser,
        post_update_a_user,post_delete_a_user,
        post_success_delete_a_user
}