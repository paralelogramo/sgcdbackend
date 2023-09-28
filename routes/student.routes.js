import { Router } from "express";

import {
    createStudent,
    deleteStudentById,
    getStudentById,
    getStudents,
    updateStudentById
} from "../controllers/student.controller.js"

const router = Router();

// GET all student  
router.get("/", getStudents);

// GET a student
router.get("/:id", getStudentById);

// CREATE a student
router.post("/", createStudent);

// UPDATE a student
router.put("/:id", updateStudentById);

// DELETE a student
router.delete("/:id", deleteStudentById);



export default router;