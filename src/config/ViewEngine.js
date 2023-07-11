const express = require('express')
const path = require('path')

controlViewEngine=(app)=>{
    app.use(express.static(path.join('./src','public')));
    app.set("views",path.join('./src',"views"))
    app.set('view engine', 'ejs')
    console.log(__dirname)
}


module.exports = controlViewEngine