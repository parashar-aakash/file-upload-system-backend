const mongoose = require("mongoose");

const ReportingSchema = new mongoose.Schema({
    filename: { type: String },
    date: { type: String },
    time: { type: String },
    error: { type: String }
})

module.exports = mongoose.model( "ReportingFiles", ReportingSchema );
