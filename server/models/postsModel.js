//getting mongoose connection
const mongoose = require("./connection.js");

//defining posts schema
const postSchema = mongoose.Schema(
  {
    //userId: { type: String, required: true },
    desc: { type: String, required: true },
    image: String,
    likes: [],
    createdAt: {
      type: Date,
      default: new Date(),
    },
  },
  {
    timestamps: true,
  }
);

//getting posts schema
let Posts = mongoose.model("posts", postSchema);

//importing posts schema
module.exports = Posts;
