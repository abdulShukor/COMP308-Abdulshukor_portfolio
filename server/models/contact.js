let mongoose = require('mongoose');
//<!--Abdul Shukor:ID 300919831-->

// create a model class
let contactSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    age: Number
},
{
    collection: "first"
});

module.exports = mongoose.model('contact', contactSchema);