import express from "express";
import {
  currentUser,
  loginUser,
  registerUser,
} from "../controllers/userController.js";
import validateToken from "../middleware/validateTokenHandler.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/current", validateToken, currentUser);

const userRouter = router;
export default userRouter;
