
const Customer = require('../models/customer.js')
const {upLoadSingleFile} = require('../services/filesService.js')


const postACustomer = async(req,res)=>{
  
     await upLoadSingleFile(req.files.image); 
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }
        let images =req.files.image.name
        const name = req.body.name;
        const address = req.body.address;
        const phone= req.body.phone;
        const email= req.body.email;
        const description= req.body.description;
        let customer = await Customer.create({
            name:name,
            address:address,
            phone:phone,
            email:email,
            description:description,
            image: images
        })
        res.status(200).json({
            error:0,
            data:customer
        })
}
const postManyCustomer =async (req,res)=>{
      console.log(req.body.customers)
      let results = await Customer.insertMany(req.body.customers)
      res.status(200).json({
        error:0,
        data: results
    })
}
const getAllCustomer =async (req,res)=>{
    let results= await Customer.find({});
    console.log(results)
    res.status(200).json({
        error:0,
        data:results
    })
}
const putCustomer = async(req,res)=>{
    await upLoadSingleFile(req.files.image); 
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }
         let images =req.files.image.name
        const name = req.body.name;
        const address = req.body.address;
        const phone= req.body.phone;
        const email= req.body.email;
        const description= req.body.description;
        const id = req.body.id;
      
    let results = await Customer.updateOne({_id:id},{image:images,name:name,address:address,phone:phone,email:email,description:description})
    res.status(200).json({
        error:0,
        data:results
    })
    
}

const deleteCustomer = async(req,res)=>{
    const id = req.body.id;
    let results = await Customer.deleteOne({_id:id})
    res.status(200).json({
        error:0,
        data:results
    })
}
const deleteManyCustomer = async(req,res)=>{
    console.log(req.body.Id_customer)
    let results = await Customer.deleteMany({_id:{$in:req.body.Id_customer}})
    res.status(200).json({
        error:0,
        data:results
    })
}

module.exports={ postACustomer,getAllCustomer,putCustomer,deleteCustomer,postManyCustomer,deleteManyCustomer}
