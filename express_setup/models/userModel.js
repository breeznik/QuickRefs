import { Timestamp } from "mongodb";
import mongoose, { mongo } from "mongoose";

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "please add the username"],
    },
    email: {
      type: String,
      required: [true, "please add the user email addresss"],
      unique: [true, "email adress already taken"],
    },
    password: {
      type: String,
      required: [true, "please add the user password"],
    },
  },
  {
    Timestamp: true,
  }
);


const userModel = mongoose.model("users", userSchema);;

export default userModel;