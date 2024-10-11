import user_model from "../model/user.model.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await user_model.findOne({ email });
    if (user) {
      return res.status(409).json({ message: "User already exists" });
    }
    const salt = bcryptjs.genSaltSync(10);
    const hashedPass = bcryptjs.hashSync(password, salt);

    const createdUser = new user_model({
      name: name,
      email: email,
      password: hashedPass,
    });

    await createdUser.save();
    res.status(201).json({
      message: "User created successfully",
      user: {
        _id: createdUser._id,
        name: createdUser.name,
        email: createdUser.email,
      },
    });
  } catch (error) {
    console.log("Error:" + error);
    res.status(501).json({ message: "Internal Server Error" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await user_model.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not registered" });
    }
    const isMatch = await bcryptjs.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid password" });
    } else {
      return res.status(200).json({
        message: "Login Successful",
        user: {
          _id: user._id,
          name: user.name,
          email: user.email,
        },
      });
    }
  } catch (error) {
    console.log(error);
    res.status(501).json({ message: "Internal Server Error" });
  }
};
