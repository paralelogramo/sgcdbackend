import express from "express";

import campusRoutes from "./routes/campus.routes.js";
import directorRoutes from "./routes/director.routes.js";
import notesRoutes from "./routes/personal_notes.routes.js";

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/apiv1/campus", campusRoutes);
app.use("/apiv1/director", directorRoutes);
app.use("/apiv1/notes", notesRoutes);

app.use((req, res, next) => {
    res.status(404).json({ message: "Not found" });
});

export default app;