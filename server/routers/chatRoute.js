const chatController = require("../controllers/chatsController");


const express = require("express");


const router = express.Router();

//defining routes
router.post("/create", chatController.createChat);
router.post("/getchatshistoryarray", chatController.getChatsHistoryArray);
router.post("/getchat", chatController.getChat);


//exporting routes
module.exports = router;