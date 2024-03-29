const chatController = require("../controllers/chatsController");


const express = require("express");


const router = express.Router();

//defining routes
router.post("/create", chatController.createChat);
router.post("/getchatshistoryarray", chatController.getChatsHistoryArray);
router.post("/getchat", chatController.getChat);
//router.post("/sendchat", chatController.sendChat);


//exporting routes
module.exports = router;