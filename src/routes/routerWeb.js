const express = require('express')
const router= express.Router()
const {sample,getHome,port_a_user,getUser,get_read_user,getUpdateUser,post_update_a_user,post_delete_a_user
,post_success_delete_a_user} = require("../controllers/HomeController")

router.get('/',getHome )
router.get('/abc',sample)
router.get('/create_a_user',getUser)
router.post('/success_create',port_a_user)
router.get('/read_user',get_read_user)
router.get('/update_a_user/:id',getUpdateUser)
router.post('/success_update',post_update_a_user)
router.post('/delete_a_user/:id',post_delete_a_user)
router.post('/success_delete',post_success_delete_a_user)
module.exports=router
