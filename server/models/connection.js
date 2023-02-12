//getting mongoose
const mongoose = require("mongoose");

//getting dotenv
require("dotenv").config();
const uri = process.env.mondoDB_Api;

//running mongose
main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(uri);
}
//exporting mongoose connection of DB
module.exports = mongoose;
