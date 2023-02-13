//getting user schema
const User = require("../models/userModel");

//getting bcrypt
const bcrypt = require("bcrypt");

//creating signup function
const signup = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    bcrypt.hash(password, 10, async (err, hash) => {
      if (hash) {
        let newUser = new User({
          name: name,
          email: email,
          password: hash,
        });
        await newUser.save();
        res.status(200).json("User Created");
      }
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//creating login function
const login = async (req, res) => {
  const { name, password } = req.body;

  try {
    const user = await User.findOne({ name: name });
    if (user) {
      const compare = await bcrypt.compare(password, user.password);
      compare ? res.send(true) : res.send("Wrong Password");
    } else {
      res.send("user not found");
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//exporting the following functions
module.exports = { login, signup };
