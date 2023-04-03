//getting user schema
const User = require("../models/userModel");

//creating file system
const fs = require("fs");

// Define the file path and name
const filePath = "./Rooms.txt";
let roomValue = null;
fs.readFile(filePath, "utf8", (err, data) => {
  if (err) throw err;
  const value = data.trim();
  roomValue = value;
  console.log("room: " + roomValue);
});

//function to get all users
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({ _id: { $ne: req.params.id } });
    res.json(users);
  } catch (err) {
    res.status(500).json({
      status: "Failed",
      message: err,
    });
  }
};

//function to send friend request
const sendFriendRequest = async (req, res) => {
  try {
    const sender = req.body.sender;
    const friendName = req.body.friendName;
    const user = await User.findOne({ name: friendName });
    user.friendRequests.push(sender);
    user.save();
    res.send({ message: "Request sent" });
  } catch (err) {
    res.status(500).json({
      status: "Failed",
      message: err,
    });
  }
};

//function to accept friend request
const acceptFriendRequest = async (req, res) => {
  const friendName = req.body.friendName;
  const username = req.body.username;
  const user = await User.findOne({ name: username });
  const friend = await User.findOne({ name: friendName });

  if (user) {

    for (var i = 0; i < user.friendRequests.length; i++) {
      if (user.friendRequests[i] == friendName) {
        

        user.friends.push(user.friendRequests[i] );
        user.friendRequests.splice(i, 1);


        user.rooms.push(roomValue);
        friend.rooms.push(roomValue);
        
        let newValue = parseInt(roomValue);                   
        newValue += 1;
        let convertedValue = newValue.toString();

        fs.writeFile(filePath, convertedValue, { flag: "w" }, (err) => {
          if (err) throw err;
        });
      }
    }
    user.save();
    friend.save();
  }
};

//function to cancel friend request
const cancelFriendRequest = async (req, res) => {
  try {
    const sender = req.body.sender;
    const friendName = req.body.friendName;
    const user = await User.findOne({ name: friendName });
    if (user) {
      for (var i = 0; i < user.friendRequests.length; i++) {
        if (user.friendRequests[i] == sender) {
          user.friendRequests.splice(i, 1);
        }
      }
    }
    user.save();
    res.send({ message: "Request sent" });
  } catch (err) {
    res.status(500).json({
      status: "Failed",
      message: err,
    });
  }
};

//function to get specific user
const getUserRoom = async (req, res) => {
  try {
    const request = req.body.username;
    const user = await User.findOne({ name: request });
    if(user){
      res.send({
        rooms:user.rooms,
      })
    }
  } catch (err) {
    res.status(500).json({
      status: "Failed",
      message: err,
    });
  }
};


//exporting the following functions
module.exports = {
  getAllUsers,
  sendFriendRequest,
  cancelFriendRequest,
  acceptFriendRequest,
  getUserRoom,
};
