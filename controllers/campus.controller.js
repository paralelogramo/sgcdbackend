import { pool } from "../database.js";

export const getAllCampus = async (req, res) => {
    try {
        const [rows] = await pool.query("SELECT * FROM campus");
        res.json(rows);
    } catch (error) {
        return res.status(500).json({ message: "Something goes wrong" });
    }
}

export const getCampus = async (req, res) => {
    try {
        const { id } = req.params;
        const [rows] = await pool.query("SELECT * FROM campus WHERE id = ?", [id]);

        if (rows.length <= 0) {
            return res.status(404).json({ message: "Campus not found" });
        }

        res.json(rows[0]);

    } catch (error) {
        return res.status(500).json({ message: "Something goes wrong" });
    }
}

export const createCampus = async (req, res) => {
    try {
        const { name, city } = req.body;
        const [rows] = await pool.query("INSERT INTO campus (name, city) VALUES (?, ?)", [name, city]);

        res.status(201).json({
            id: rows.insertId,
            name,
            city
        });
    } catch (error) {
        if(error.code === "ER_DUP_ENTRY") {
            return res.status(400).json({ message: "Campus already exists" });
        }
        return res.status(500).json({ message: "Something goes wrong" });
    }
}

export const updateCampus = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, city } = req.body;
        const [result] = await pool.query("UPDATE campus SET name = ?, city = ? WHERE id = ?", [name, city, id]);

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Campus not found" });
        }
        
        const[rows] = await pool.query("SELECT * FROM campus WHERE id = ?", [id]);

        res.json(rows[0]);
    } catch (error) {
        return res.status(500).json({ message: "Something goes wrong" });
    }
}

export const deleteCampus = async (req, res) => {
    try {
        const { id } = req.params;
        const [result] = await pool.query("DELETE FROM campus WHERE id = ?", [id]);

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Campus not found" });
        }

        return res.status(204).json({ message: "Campus deleted" });
    } catch (error) {
        return res.status(500).json({ message: "Something goes wrong" });
    }
}