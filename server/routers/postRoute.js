//getting user controller
const postsController = require("../controllers/postsController");

//getting express
const express = require("express");

//getting express router
const router = express.Router();

//defining routes
router.post("/", postsController.createPost);

//exporting routes
module.exports = router;
