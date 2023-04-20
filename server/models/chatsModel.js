const mongoose = require('mongoose')

const MessageSchema = new mongoose.Schema({
  userA:String,
  userB:String,
  chats:[String],
  ChatSender:[String],
});
const Chats = mongoose.model("chats", MessageSchema);

module.exports = Chats;