//getting user controller
const postsController = require("../controllers/postsController");

//getting express
const express = require("express");

//getting express router
const router = express.Router();

//defining routes
router.post("/", postsController.createPost);
router.get("/getposts", postsController.getPosts);

//exporting routes
module.exports = router;
