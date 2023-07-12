const mongoose = require('mongoose');

    const customerSchema = new mongoose.Schema({
        name: String,
        address:String,
        phone: String,
        email: String,
        description: String,
        image: String
      });
    const customer = mongoose.model('Customer',  customerSchema);

module.exports = customer