import express from 'express';
import isAuthenticated from '../middlewares/isAuthenticated.js';
import { applyJob, getApplicants, getAppliedJobs, updateStatus } from '../controllers/application.controller.js';
import { getAllJobs } from '../controllers/job.controller.js';


const router = express.Router();
router.get("/apply/:id", isAuthenticated, applyJob);
router.get("/getAppliedJobs", isAuthenticated, getAppliedJobs);
router.route("/:id/applicants").get(isAuthenticated,getApplicants);
router.route("/status/:id/update").post(isAuthenticated,updateStatus);

export default router;