const mongoose = require('mongoose');

var Employee = mongoose.model('Employee',{
    name:{type: String},
    position:{type: String},
    office:{type: String},
    salary:{type: String},
});

module.exports = { Employee };