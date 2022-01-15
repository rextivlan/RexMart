import express from "express";
const router = express.Router();
import {
  authUser,
  getUserProfile,
  registerUser,
  updateUserProfile,
  getUsers,
} from "../controllers/userController.js";
import { auth, admin } from "../middleware/authMiddleware.js";

router.route("/").post(registerUser).get(auth, admin, getUsers);
router.post("/login", authUser);
router.route("/profile").get(auth, getUserProfile).put(auth, updateUserProfile);

export default router;
