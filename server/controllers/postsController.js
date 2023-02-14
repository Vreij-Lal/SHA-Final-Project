//getting posts schema
const Posts = require("../models/postsModel");

const createPost = async (req, res) => {
  const newPost = new Posts(req.body);

  try {
    await newPost.save();
    res.send(newPost);
  } catch (error) {
    res.send(error);
  }
};

//exporting the following functions
module.exports = { createPost };
