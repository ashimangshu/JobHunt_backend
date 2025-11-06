import express from "express";
import { register, login, logout, updateProfile } from "../controllers/user.controller.js";
import  isAuthenticated  from "../middlewares/isAuthenticated.js";
import { singleUpload } from "../middlewares/multer.js";

const router = express.Router();

router.post("/register", singleUpload,register);
router.post("/login", login);   // <-- must match
router.get("/logout", logout);
router.route("/profile/update").post(isAuthenticated,singleUpload,updateProfile);
export default router;
