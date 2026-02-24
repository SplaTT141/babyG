import { connection } from "../db.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { JWT_SECRET, JWT_EXPIRES_IN, COOKIE_SECURE, COOKIE_MAX_AGE } from "../env.js";

export async function postLogin(req, res) {
    const { usernameOrEmail, password } = req.body;

    try {
        /* ==== User existence check ==== */
        const sql = `SELECT * FROM users WHERE username = ? OR email = ?`;

        const [response] = await connection.execute(sql, [usernameOrEmail, usernameOrEmail]);

        if (response.length === 0) {
            return res.status(401).json({ status: 'error', message: 'Neteisingi prisijungimo duomenys' });
        }

        if (response.length !== 1) {
            return res.status(500).json({ status: 'error', message: 'Serverio klaida' });
        }

        const user = response[0];

        /* ==== Password validation ==== */
        const isPasswordValid = await bcrypt.compare(password, user.passwordHash);
        if (!isPasswordValid) {
            return res.status(401).json({ status: 'error', message: 'Neteisingi prisijungimo duomenys' });
        }

        /* ==== JWT generation ==== */
        const payload = {
            id: user.id,
            username: user.username,
            email: user.email,
        };
        const secret = JWT_SECRET;
        const token = jwt.sign(payload, secret, { expiresIn: JWT_EXPIRES_IN });

        /* ==== Cookie assignment ==== */
        res.cookie('token', token, {
            httpOnly: true,
            secure: COOKIE_SECURE,
            maxAge: COOKIE_MAX_AGE,
            sameSite: 'Lax',
            path: '/',
        });

        return res.status(200).json({ status: 'success', message: 'Prisijungta sėkmingai', userData: payload });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ status: 'error', message: 'Serverio klaida' });
    }
}