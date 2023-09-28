import { Router } from "express";

import {
    getInstanceCourses,
    createInstanceCourse,
    deleteInstanceCourseById,
    getInstanceCourseById,
    updateInstanceCourseById
} from "../controllers/instance_course.controller";

const router = Router();

// GET all instance course
router.get("/", getInstanceCourses);

// GET a instance course
router.get("/:id", getInstanceCourseById);

// CREATE a instance course
router.post("/", createInstanceCourse);

// UPDATE a instance course
router.put("/:id", updateInstanceCourseById);

// DELETE a instance course
router.delete("/:id", deleteInstanceCourseById);

export default router;