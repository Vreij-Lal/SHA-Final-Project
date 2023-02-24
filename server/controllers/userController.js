//getting user schema
const User = require("../models/userModel");

//function to get user
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

//function to update user
const updateUser = async (req, res) => {
  const id = req.params.id;
  const { currentUserId } = req.body;

  if (id === currentUserId) {
    try {
      const user = await User.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(403).json("cannot update other profiles");
  }
};

//function to delete user
const deleteUser = async (req, res) => {
  const id = req.params.id;

  const { currentUserId } = req.body;

  if (currentUserId === id) {
    try {
      await User.findByIdAndDelete(id);
      res.status(200).json("User deleted");
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(403).json("cannot delete other profiles");
  }
};
//exporting the following functions
module.exports = { getAllUsers, updateUser, deleteUser };
