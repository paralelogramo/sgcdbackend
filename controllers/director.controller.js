import { pool } from "../database.js";

// CRUD operations for Director
export const getAllDirectors = async (req, res) => {
    try {
        const [rows] = await pool.query("SELECT * FROM director");
        res.json(rows);
    } catch (error) {
        return res.status(500).json({ message: "Something goes wrong" });
    }
}

export const getDirector = async (req, res) => {
    try {
        const { id } = req.params;
        const [rows] = await pool.query("SELECT * FROM director WHERE id = ?", [id]);

        if (rows.length <= 0) {
            return res.status(404).json({ message: "Director not found" });
        }

        res.json(rows[0]);

    } catch (error) {
        return res.status(500).json({ message: "Something goes wrong" });
    }
}

export const createDirector = async (req, res) => {
    try {
        const { email, fullname, password } = req.body;
        const [rows] = await pool.query("INSERT INTO director (email, fullname, password) VALUES (?, ?, ?)", [email, fullname, password]);

        res.status(201).json({
            id: rows.insertId,
            email: email,
            fullname: fullname,
            password: password
        });
    } catch (error) {
        if(error.code === "ER_DUP_ENTRY") {
            return res.status(400).json({ message: "Director already exists" });
        }
        return res.status(500).json({ message: "Something goes wrong" });
    }
}

export const updateDirector = async (req, res) => {
    try {
        const { id } = req.params;
        const { email, fullname, password } = req.body;
        const [result] = await pool.query("UPDATE director SET email = ?, fullname = ?, password = ? WHERE id = ?", [email, fullname, password, id]);

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Director not found" });
        }
        
        const[rows] = await pool.query("SELECT * FROM director WHERE id = ?", [id]);

        res.json(rows[0]);
    } catch (error) {
        return res.status(500).json({ message: "Something goes wrong" });
    }
}

export const deleteDirector = async (req, res) => {
    try {
        const { id } = req.params;
        const [result] = await pool.query("DELETE FROM director WHERE id = ?", [id]);

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Director not found" });
        }

        return res.status(204).json({ message: "Director deleted" });
    } catch (error) {
        return res.status(500).json({ message: "Something goes wrong" });
    }
}