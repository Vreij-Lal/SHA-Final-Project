//getting mongoose connection
const mongoose = require("./connection.js");

//defining user schema
const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Username is required!"],
    },
    email: {
      type: String,
      required: [true, "Email is required!"],
    },
    password: {
      type: String,
      required: [true, "Password is required!"],
    },
  },
  { timestamps: true }
);

//getting user schema
const Users = mongoose.model("users", UserSchema);

//importing user schema
module.exports = Users;