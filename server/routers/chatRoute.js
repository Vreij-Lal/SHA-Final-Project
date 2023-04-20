const chatController = require("../controllers/chatsController");


const express = require("express");


const router = express.Router();

//defining routes
router.post("/create", chatController.createChat);

//exporting routes
module.exports = router;