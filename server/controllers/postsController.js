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

const getPosts = async (req, res) => {
  const allPosts = await Posts.find({});
  try {
    res.send(allPosts);
  } catch (error) {
    res.send(error);
  }
};

//exporting the following functions
module.exports = { createPost, getPosts };
