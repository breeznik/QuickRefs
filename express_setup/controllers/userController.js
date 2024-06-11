import asyncHandler from "express-async-handler";
import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

//@desc register the user
//@route POST /api/users/register
//@access public
export const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    res.status(400);
    throw new Error("All fields are mendatory!");
  }
  const userAvailable = await userModel.findOne({ email });

  if (userAvailable) {
    res.status(400);
    throw new Error("user already registered");
  }

  //Hash password
  const hashedPassword = await bcrypt.hash(password, 10);
  console.log(hashedPassword);

  const user = await userModel.create({
    username,
    email,
    password: hashedPassword,
  });

  if (user) {
    res.status(201).json({ _id: user.id, email: user.email });
  } else {
    res.status(400);
    throw new Error("user data is not valid ");
  }

  console.log("user registered");
});
//@desc login the user
//@route Post /api/users/login
//@access public
export const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400);
    throw new Error("All fields are mendatory");
  }
  const user = await userModel.findOne({ email });

  if (user && (await bcrypt.compare(password, user.password))) {
    const accessToken = jwt.sign(
      {
        user: {
          username: user.username,
          email: user.email,
          id: user.id,
        },
      },
      process.env.TOKEN_SECRET,
      { expiresIn: "10m" }
    );
    res.status(200).json({
      accessToken,
    });
  } else {
    res.status(404);
    throw new Error("email or password is not valid");
  }

  res.json({ message: "login reply" });
});
//@desc register the user
//@route GET /api/users/current
//@access public
export const currentUser = asyncHandler(async (req, res) => {
  res.json(req.user);
});
