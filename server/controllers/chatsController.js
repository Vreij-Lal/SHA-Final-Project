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
/*
const sendChat = async (req, res) => {
  const { username, friendName, message} = req.body;
    try {
      let newChat = new Chat({
        sender: sender,
        receiver: receiver,
        message: message,
      });
      await newChat.save();
      res.send({ message: "user saved !" });
    } 
    catch (err) {
      res.send({ message: "error"});
    }
};
*/
module.exports = {
  createChat,
};
