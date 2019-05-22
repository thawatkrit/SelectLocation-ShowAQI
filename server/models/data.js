const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create Schema
const DataSchema = new Schema({
  id: String,
  name: String,
  subject: String,
  AQI: String
});
module.exports = Data = mongoose.model("dataNaja", DataSchema);
