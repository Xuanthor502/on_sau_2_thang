const mongoose = require('mongoose');

    const kittySchema = new mongoose.Schema({
        email:String,
        name: String,
        city:String
      });
    const user = mongoose.model('Kitten', kittySchema);


module.exports = user