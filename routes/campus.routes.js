import { Router } from "express";
import {
    createCampus,
    getAllCampus,
    getCampus,
    updateCampus,
    deleteCampus
} from "../controllers/campus.controller.js";

const router = Router();

// GET all campus
router.get("/", getAllCampus);

// GET a campus
router.get("/:id", getCampus);

// CREATE a campus
router.post("/", createCampus);

// UPDATE a campus
router.put("/:id", updateCampus);

// DELETE a campus
router.delete("/:id", deleteCampus);

export default router;