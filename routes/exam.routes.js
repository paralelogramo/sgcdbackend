import { Router } from "express";

import {
    createExam,
    deleteExamById,
    getExamById,
    getExams,
    updateExamById
} from "../controllers/exam.controller";

const router = Router();

// GET all exam
router.get("/", getExams);

// GET a exam
router.get("/:id", getExamById);

// CREATE a exam
router.post("/", createExam);

// UPDATE a exam
router.put("/:id", updateExamById);

// DELETE a exam
router.delete("/:id", deleteExamById);

export default router;