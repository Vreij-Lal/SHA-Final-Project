//getting user schema
const User = require("../models/userModel");

//getting bcrypt
const bcrypt = require("bcrypt");

//getting jwt
const jwt = require("jsonwebtoken");

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
      bcrypt.compare(password, user.password, (err, result) => {
        if (result) {
          let token = jwt.sign({ id: user._id }, "testing", {
            expiresIn: "30s",
          });
          res.send({ token });
        } else {
          res.send({ message: false });
        }
      });
    } else {
      res.send("wrong password");
    }
  } catch (error) {
    res.send({ message: error.message });
  }
};
const verify = async (req, res) => {
  jwt.verify(req.body.token, "testing", async (err, decoded) => {
    if (err) {
      res.send({ message: "session expired !" });
    } else {
      let userID = decoded.id;
      let user = await User.findOne({ _id: userID });
      let token = jwt.sign({ id: user._id }, "testing", { expiresIn: "30s" });
      let data = {
        name: user.name,
        _id: user.id,
        token: token,
      };
      res.send(data);
    }
  });
};

//exporting the following functions
module.exports = { login, signup, verify };
