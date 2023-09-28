import express from "express";

import campusRoutes from "./routes/campus.routes.js";
import directorRoutes from "./routes/director.routes.js";
import notesRoutes from "./routes/personal_notes_d.routes.js";
import studentRoutes from "./routes/student.routes.js";

const app = express();

const base = "/apiv1";

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use(base + "/campus", campusRoutes);
app.use(base + "/director", directorRoutes);
app.use(base + "/notes", notesRoutes);
app.use(base + "/student", studentRoutes);

app.use((req, res, next) => {
    res.status(404).json({ message: "Not found" });
});

export default app;