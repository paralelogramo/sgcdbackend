import { pool } from "../database.js";

// CRUD operations for student

export const createStudent = async (req, res) => {
    try {
        const { dni, fullname, email, scholarship, scholarship_state, id_number } = req.body;

        // falta verificar si la persona ya existe
        const [rows_1] = await pool.query("SELECT * FROM person WHERE dni=?", [dni]);
        if (rows_1.length > 0) {
            const [rows_2] = await pool.query("INSERT INTO student (person_ref, scholarship, scholarship_state, id_number) VALUES (?, ?, ?, ?)", [dni, scholarship, scholarship_state, id_number]);
            if (rows_2.affectedRows === 1) {
                return res.status(200).json({ message: "Student created" });
            }
        }

        const [rows_3] = await pool.query("INSERT INTO person (dni, fullname, email) VALUES (?, ?, ?)", [dni, fullname, email]);
        if (rows_3.affectedRows === 1) {
            const [rows_4] = await pool.query("INSERT INTO student (person_ref, scholarship, scholarship_state, id_number) VALUES (?, ?, ?, ?)", [dni, scholarship, scholarship_state, id_number]);
            if (rows_4.affectedRows === 1) {
                return res.status(200).json({ message: "Student created" });
            }
        }
        
        return res.status(400).json({ message: "Student not created" });
        
    } catch (error) {
        return res.status(500).json({ message: "Something goes wrong" });
    }
}

export const getStudents = async (req, res) => {
    try {
        const [rows] = await pool.query("SELECT p.fullname, p.dni, p.email, s.id_number, s.scholarship, s.scholarship_state FROM student as s, person as p WHERE dni=s.person_ref;");
        return res.status(200).json(rows);
    } catch (error) {
        return res.status(500).json({ message: "Something goes wrong" });
    }
}

export const getStudentById = async (req, res) => {
    try {
        const { id } = req.params;
        const [rows] = await pool.query("SELECT p.fullname, p.dni, p.email, s.id_number, s.scholarship, s.scholarship_state FROM student as s, person as p WHERE dni=s.person_ref AND dni=?", [id]);
        return res.status(200).json(rows[0]);
    } catch (error) {
        return res.status(500).json({ message: "Something goes wrong" });
    }
}

export const updateStudentById = async (req, res) => {
    try {
        const { id } = req.params;
        const { fullname, email, scholarship, scholarship_state, id_number } = req.body;
        const [rows] = await pool.query("UPDATE person SET fullname=?, email=? WHERE dni=?", [fullname, email, id]);
        if (rows.affectedRows === 1) {
            const [rows2] = await pool.query("UPDATE student SET scholarship=?, scholarship_state=?, id_number=? WHERE person_ref=?", [scholarship, scholarship_state, id_number, id]);
            if (rows2.affectedRows === 1) {
                return res.status(200).json({ message: "Student updated" });
            }
        }
        return res.status(400).json({ message: "Student not updated" });
    } catch (error) {
        return res.status(500).json({ message: "Something goes wrong" });
    }
}

export const deleteStudentById = async (req, res) => {
    try {
        const { id } = req.params;
        const [rows] = await pool.query("DELETE FROM student WHERE person_ref=?", [id]);
        if (rows.affectedRows === 1) {
            return res.status(204).json({ message: "Student deleted" });
        }
        return res.status(400).json({ message: "Student not found" });
    } catch (error) {
        return res.status(500).json({ message: "Something goes wrong" });
    }
}