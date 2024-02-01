const User = require("../models/userModel")
const bcrypt = require("bcrypt");

exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body
    const profileImg = "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg"
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({ name: name, email: email, password: hashedPassword, profileImg })
    res.status(200).json({ msg: "sucess", user: newUser })
  } catch (err) {
    console.log(err.message)
    res.status(500).json("error making new User")
  }
}


exports.login = async (req, res) => {

}


