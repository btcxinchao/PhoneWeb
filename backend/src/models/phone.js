
const mongoose= require('mongoose');

const phoneSchema = new mongoose.Schema({
    title: {type : String, required: true},
    image: {type : String, required: true},
    price: {type : Number},
    rate : {type : Number},
    location: {type : String}
});

const Phone = mongoose.model('Phone', phoneSchema);

module.exports = Phone;