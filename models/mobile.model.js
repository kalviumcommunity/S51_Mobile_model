const mongoose = require("mongoose");

const  mobileSchema = new mongoose.Schema({
    modelId:Number,
    Manufacturer: String,
    Specification: String,
    Price: String,
    Back_Camera: String,
    Battery_Capacity: String,
    Front_Camera: String,
    Mobile_Model: String,
    Operating_System: String,
    Release_Year: Number,
}); 

const Mobile = mongoose.model("mobilemodels", mobileSchema)

module.exports = Mobile;