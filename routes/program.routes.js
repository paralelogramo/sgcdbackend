import router from "./student.routes"

import {
    getPrograms,
    createProgram,
    deleteProgramById,
    getProgramById,
    updateProgramById
} from "../controllers/program.controller";

const router = Router();

// GET all program
router.get("/", getPrograms);

// GET a program
router.get("/:id", getProgramById);

// CREATE a program
router.post("/", createProgram);

// UPDATE a program
router.put("/:id", updateProgramById);

// DELETE a program
router.delete("/:id", deleteProgramById);

export default router;