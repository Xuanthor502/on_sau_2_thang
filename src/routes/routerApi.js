const express = require('express')
const router= express.Router()
const {getUserAPI,postUserAPI,putUserAPi,deleteUserAPI, postUpLoadFile} = require("../controllers/userController.js")
const {postACustomer,getAllCustomer,putCustomer,deleteCustomer,postManyCustomer,deleteManyCustomer} = require("../controllers/customerController")
router.get('/users',getUserAPI)
router.post('/users',postUserAPI)
router.put('/users',putUserAPi)
router.delete('/users',deleteUserAPI)

router.post('/file', postUpLoadFile)

router.post('/customer',postACustomer)
router.post('/customer-many',postManyCustomer)
router.get('/customer',getAllCustomer)
router.put('/customer',putCustomer)
router.delete('/customer',deleteCustomer)
router.delete('/customer-many',deleteManyCustomer)
module.exports=router
