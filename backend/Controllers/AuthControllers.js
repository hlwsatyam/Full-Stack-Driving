const { CreateError } = require("../ErrorCreate/CreateError");
const { UserModel } = require("../Models/UserModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const {
  isPasswordValid,
  isEmailValid,
} = require("../Validation/UserAuthentication");

const Login = async (req, res, next) => {
  console.log(req.body)
  const { email, password } = req.body;
  try {
    if (!isPasswordValid(password) && !isEmailValid(email)) {
      return next(CreateError(503, "Invalid Credentials!"));
    }
  } catch (err) {
    return next(err);
  }

  try {
    const user = await UserModel.findOne({ email });
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (isPasswordMatch) {
      const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY);
      return res.status(200).json({ message: "Login successfully!", token });
    }
    next(CreateError(404, "Invalid Credentials!"));
  } catch (error) {
    return next(CreateError(501, "Something Went Wrong!"));
  }
};

const Register = async (req, res, next) => {
  const { email, password, name } = req.body;
  try {
    if (!isPasswordValid(password) && !isEmailValid(email)) {
      return next(CreateError(503, "Invalid Credentials!"));
    }
  } catch (err) {
    return next(err); 
  }

  const user = new UserModel({
    email,
    name,
    password: bcrypt.hashSync(password),
  });

  try {
    await user.save();
    const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY);
    return res.status(200).json({ message: "signin successfully!", token });
  } catch (error) {
    return next(CreateError(501, "Something Went Wrong!"));
  }
};

module.exports = { Login, Register };
