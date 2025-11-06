import express from "express";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { getAllJobs, postJob, getJobById, getAdminJobs } from "../controllers/job.controller.js";

const router = express.Router();

router.post("/postJob", isAuthenticated, postJob);
router.get("/getJobs", isAuthenticated, getAllJobs);
router.get("/getJob/:id", isAuthenticated, getJobById);
router.get("/getAdminJobs", isAuthenticated, getAdminJobs);
export default router;
