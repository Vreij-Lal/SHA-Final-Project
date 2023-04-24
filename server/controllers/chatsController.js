//getting user schema
const Chat = require("../models/chatsModel");
const User = require("../models/userModel");


const createChat = async (req, res) => {
  const { userA, userB} = req.body;
    try {
      let newChat = new Chat({
        userA: userA,
        userB: userB,
      });
      await newChat.save();

      const A = await User.findOne({name:userA});
      const B = await User.findOne({name:userB});

      if(A && B){
        A.chatsHistory.push(newChat._id);
        B.chatsHistory.push(newChat._id);
      }
       A.save();
       B.save();

       res.send({message:"created"});
    } 
    catch (err) {
      res.send(err);
    }
};

const getChatsHistoryArray = async (req, res) => {
  const {name} = req.body;
    try {
      const user = await User.findOne({name:name});
      const chatsHistoryArray = user.chatsHistory;
       res.send(chatsHistoryArray);
    } 
    catch (err) {
      res.send(err);
    }
};

const getChat = async (req, res) => {
  const {id} = req.body;
    try {
      const chat = await Chat.findOne({_id:id});
      const chatAndChatSender = {
        chats:chat.chats,
        chatSender:chat.ChatSender,
      }
       res.send(chatAndChatSender);
    } 
    catch (err) {
      res.send(err);
    }
};

/*const sendChat = async (req, res) => {
  const {id, senderName, message} = req.body;
    try {
      const chat = await Chat.findOne({_id:id})
      if(chat){
         chat.ChatSender.push(senderName);
         chat.chats.push(message)
         await chat.save();
      }
     
      res.send({ message: "success"});
    } 
    catch (err) {
      res.send({ message: "error"});
    }
};*/

module.exports = {
  createChat,
  getChatsHistoryArray,
  getChat,
};
