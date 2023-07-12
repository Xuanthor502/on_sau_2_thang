const express = require('express')
const router= express.Router()
const {getUserAPI,postUserAPI,putUserAPi,deleteUserAPI, postUpLoadFile} = require("../controllers/userController.js")
const {postACustomer} = require("../controllers/customerController")
router.get('/users',getUserAPI)
router.post('/users',postUserAPI)
router.put('/users',putUserAPi)
router.delete('/users',deleteUserAPI)

router.post('/file', postUpLoadFile)

router.post('/customer',postACustomer)

module.exports=router
