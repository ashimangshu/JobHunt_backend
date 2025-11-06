import express from "express";

import  isAuthenticated  from "../middlewares/isAuthenticated.js";
import { getCompany, getCompanyById, registerCompany, updateCompany } from "../controllers/company.controller.js";
import { get } from "mongoose";
import { singleUpload } from "../middlewares/multer.js";

const router = express.Router();

router.post("/register",isAuthenticated, registerCompany);
router.get("/get",isAuthenticated,getCompany);   // <-- must match
router.get("/get/:id", isAuthenticated,getCompanyById);
router.route("/update/:id").put(isAuthenticated, singleUpload,updateCompany);

export default router;
