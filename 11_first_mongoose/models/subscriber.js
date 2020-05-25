const mongoose = require("mongoose"),
    subscribeSchema = mongoose.Schema({
    name: String,
    email: String, 
    zipCode: Number
});
module.exports = mongoose.model("Subscriber", subscribeSchema);