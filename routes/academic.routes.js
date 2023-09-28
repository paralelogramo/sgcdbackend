import { Router } from "express";

import {
    createAcademic,
    deleteAcademicById,
    getAcademicById,
    getAcademics,
    updateAcademicById
} from "../controllers/academic.controller.js";

const router = Router();

// GET all academic
router.get("/", getAcademics);

// GET a academic
router.get("/:id", getAcademicById);

// CREATE a academic
router.post("/", createAcademic);

// UPDATE a academic
router.put("/:id", updateAcademicById);

// DELETE a academic
router.delete("/:id", deleteAcademicById);

export default router;