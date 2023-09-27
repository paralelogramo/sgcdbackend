import { pool } from "../database.js";

// CRUD operations for notes of a director
export const createPersonalNoteDirector = async (req, res) => {
    try {
        const { text, director_ref } = req.body;
        const [rows] = await pool.query("INSERT INTO personal_notes_d (text, director_ref) VALUES (?, ?)", [text, director_ref]);
        res.status(201).json({
            id: rows.insertId,
            text: text,
            director_ref: director_ref
        });
    } catch (error) {
        return res.status(500).json({ message: "Something goes wrong" });
    }
};

export const getPersonalNoteDirector = async (req, res) => {
    const { id_d, id_n } = req.params;
    try {
        const [rows] = await pool.query("SELECT pnd.id as nid, pnd.text, d.id as did, d.fullname FROM personal_notes_d as pnd, director as d WHERE pnd.director_ref=d.id AND pnd.id = ? AND d.id = ?", [id_n, id_d]);

        if (rows.length <= 0) {
            return res.status(404).json({ message: "Note not found" });
        }

        res.json(rows[0]);

    } catch (error) {
        return res.status(500).json({ message: "Something goes wrong" });
    }
};

export const getAllNotesDirector = async (req, res) => {
    try {
        const [rows] = await pool.query("SELECT pnd.id as nid, pnd.text, d.id as did, d.fullname FROM personal_notes_d as pnd, director as d WHERE pnd.director_ref=d.id");

        if (rows.length <= 0) {
            return res.status(404).json({ message: "Notes not found" });
        }

        res.json(rows);
        
    } catch (error) {
        return res.status(500).json({ message: "Something goes wrong" });
    }
};

export const getAllPersonalNotesDirector = async (req, res) => {
    const { id } = req.params;
    try {
        const [rows] = await pool.query("SELECT pnd.id as nid, pnd.text, d.id as did, d.fullname FROM personal_notes_d as pnd, director as d WHERE pnd.director_ref=d.id AND d.id = ?", [id]);

        if (rows.length <= 0) {
            return res.status(404).json({ message: "Notes not found" });
        }

        res.json(rows);

    } catch (error) {
        return res.status(500).json({ message: "Something goes wrong" });
    }
};

export const updatePersonalNoteDirector = async (req, res) => {
    try {
        const { id } = req.params;
        const { text } = req.body;
        const [result] = await pool.query("UPDATE personal_notes_d SET text = ? WHERE id = ?", [text, id]);

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Personal Note not found" });
        }

        const [rows] = await pool.query("SELECT * FROM personal_notes_d WHERE id = ?", [id]);

        res.json(rows[0]);
    } catch (error) {
        return res.status(500).json({ message: "Something goes wrong" });
    }
};

export const deletePersonalNoteDirector = async (req, res) => {
    try {
        const { id } = req.params;
        const [result] = await pool.query("DELETE FROM personal_notes_d WHERE id = ?", [id]);

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Personal Note not found" });
        }

        res.status(204).json({ message: "Personal Note deleted" });
    } catch (error) {
        return res.status(500).json({ message: "Something goes wrong" });
    }
};

export const deleteAllPersonalNoteDirector = async (req, res) => {
    try {
        const { id } = req.params;
        const [result] = await pool.query("DELETE FROM personal_notes_d WHERE director_ref = ?", [id]);

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Personal Note not found" });
        }

        res.status(204).json({ message: "Personal Note deleted" });
    } catch (error) {
        return res.status(500).json({ message: "Something goes wrong" });
    }
};