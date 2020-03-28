const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var employeeSchema = new Schema({
    name: String,
    empid: String,
    deptname: String,
    doj: Date,
    designation: String,
    ctc: Number,
    ctcUsd: Number,
    vp: Number,
    net: Number,
    selfRating: Number,
    mgrRating: Number,
    prvYearRating: Number,
    increasePercent:  Number,
    newCtc: Number,
    newVp: Number,
    newNet: Number,
    newCtcRounded: Number,
    newCtcRoundedUsd: Number,
    usdExchange: Number,
    yearEnd: Date
})

var employee = mongoose.model('employee', employeeSchema);

module.exports = employee;