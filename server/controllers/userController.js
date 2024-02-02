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
  
  try{
    const {name, password} = req.body
    const userExists = User.find({name: name});
    if (userExists) {
      const isPasswordCorrect = await bcrypt.compare(
        password,
        userExists.password
      );
      if (isPasswordCorrect) {
        userExists.password = "";
        console.log(doesUser)
        res.json({ msg: "login sucessfull", status: 200, usr: userExists });
        return;
      } else {
        res.json({ msg: "incorrect password", status: 500 });
        return;
      }

    }else{
      res.status(500).json("user not register");
    }
  }catch(err){
    res.status(500).json("error logging in")
  }
}


