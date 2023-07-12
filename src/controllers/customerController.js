
const Customer = require('../models/customer.js')
const {upLoadSingleFile} = require('../services/filesService.js')


const postACustomer = async(req,res)=>{
        // let imageUrl =""
     if (!req.files || Object.keys(req.files).length === 0) {
     return res.status(400).send('No files were uploaded.');
     } 
        await upLoadSingleFile(req.files.image)
        let name = req.body.name;
        let address = req.body.address;
        let phone = req.body.phone;
        let email = req.body.email
        let description = req.body.description;
          let customer = await Customer.create({
            name :name,
            address:address,
            phone:phone,
            email:email,
            description:description,
            // image : image
    })
        res.status(200).json({
            error:0,
            data: customer
        })
}


module.exports={ postACustomer}
