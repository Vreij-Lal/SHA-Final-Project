//getting mongoose connection
const mongoose = require("./connection.js");

//defining posts schema
const postSchema = mongoose.Schema(
  {
    userId: { type: String, required: true },
    desc: { type: String, required: true },
    likes: [],
    createdAt: {
      type: Date,
      default: new Date(),
    },
    image: String,
  },
  {
    timestamps: true,
  }
);

//getting posts schema
let Posts = mongoose.model("posts", postSchema);

//importing posts schema
module.exports = Posts;
