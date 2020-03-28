const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var testSchema = new Schema({
    content: String
});

var test  = mongoose.model('test', testSchema);

module.exports = test;