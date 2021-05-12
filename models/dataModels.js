const mongoose = require("mongoose");

const dataSchema = mongoose.Schema({
    name: String,
    email: String,
    country: String,
});

module.exports = dataModel = mongoose.model("dataModel", dataSchema);
