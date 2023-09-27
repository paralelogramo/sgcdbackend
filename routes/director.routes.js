import { Router } from "express";
import {
    createDirector,
    getAllDirectors,
    getDirector,
    updateDirector,
    deleteDirector
} from "../controllers/director.controller.js";

const router = Router();

// GET all directors
router.get("/", getAllDirectors);

// GET a director
router.get("/:id", getDirector);

// CREATE a director
router.post("/", createDirector);

// UPDATE a director
router.put("/:id", updateDirector);

// DELETE a director
router.delete("/:id", deleteDirector);

// GET all notes


export default router;