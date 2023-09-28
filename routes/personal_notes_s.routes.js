import { Router } from "express";

import {
    createPersonalNoteStudent,
    deletePersonalNoteStudent,
    deleteAllPersonalNoteStudent,
    getAllNotesStudent,
    getAllPersonalNotesStudent,
    getPersonalNoteStudent,
    updatePersonalNoteStudent
} from "../controllers/personal_notes_s.controller.js";


const router = Router();

// GET all notes of all students
router.get("/", getAllNotesStudent);

// GET all notes of a student
router.get("/:id", getAllPersonalNotesStudent);

// GET a note
router.get("/:id_d/:id_n", getPersonalNoteStudent);

// CREATE a note
router.post("/", createPersonalNoteStudent);

// UPDATE a note
router.put("/:id", updatePersonalNoteStudent);

// DELETE a note
router.delete("/:id", deletePersonalNoteStudent);

// DELETE all notes of a student
router.delete("/student/:id", deleteAllPersonalNoteStudent);


export default router;