import { connection } from "../db.js";
import bcrypt from 'bcrypt';

export async function postLogin(req, res) {
    const { usernameOrEmail, password } = req.body;

    try {
        const sql = `SELECT * FROM users WHERE username = ? OR email = ?`;

        const [response] = await connection.execute(sql, [usernameOrEmail, usernameOrEmail]);

        if (response.length === 0) {
            return res.status(401).json({ status: 'error', message: 'Neteisingi prisijungimo duomenys' });
        }

        if (response.length !== 1) {
            return res.status(500).json({ status: 'error', message: 'Serverio klaida' });
        }

        const passwordHash = response[0].passwordHash;
        const isPasswordValid = await bcrypt.compare(password, passwordHash);

        if (!isPasswordValid) {
            return res.status(401).json({ status: 'error', message: 'Neteisingi prisijungimo duomenys' });
        }

        return res.status(200).json({ status: 'success', message: 'Prisijungta sėkmingai' });
    }
    catch (error) {
        console.error(error);

        return res.status(500).json({ status: 'error', message: 'Serverio klaida' });
    }
}