import { Router } from "express";

import {
    createPersonalNoteDirector,
    deletePersonalNoteDirector,
    deleteAllPersonalNoteDirector,
    getAllNotesDirector,
    getAllPersonalNotesDirector,
    getPersonalNoteDirector,
    updatePersonalNoteDirector
} from "../controllers/personal_notes_d.controller.js";


const router = Router();

// GET all notes of all directors
router.get("/", getAllNotesDirector);

// GET all notes of a director
router.get("/:id", getAllPersonalNotesDirector);

// GET a note
router.get("/:id_d/:id_n", getPersonalNoteDirector);

// CREATE a note
router.post("/", createPersonalNoteDirector);

// UPDATE a note
router.put("/:id", updatePersonalNoteDirector);

// DELETE a note
router.delete("/:id", deletePersonalNoteDirector);

// DELETE all notes of a director
router.delete("/director/:id", deleteAllPersonalNoteDirector);


export default router;