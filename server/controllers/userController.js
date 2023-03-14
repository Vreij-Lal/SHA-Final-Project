//getting user schema
const User = require("../models/userModel");

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

const acceptFriendRequest = async (req, res) => {
  const friendName = req.body.friendName;
  const username = req.body.username;
  const user = await User.findOne({ name: username });
  console.log("old user:", user);

  if (user) {
    for (var i = 0; i < user.friendRequests.length; i++) {
      if (user.friendRequests[i] == friendName) {
        user.friends.push(user.friendRequests[i]);
        user.friendRequests.splice(i, 1);
      }
    }
    user.save();
  }
  console.log("new user:", user);
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

//exporting the following functions
module.exports = {
  getAllUsers,
  sendFriendRequest,
  cancelFriendRequest,
  acceptFriendRequest,
};
