import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../env.js';

export function authenticateToken(req, res, next) {
    console.log(req.user);
    const token = req.cookies.token;

    if (!token) {
        return next();
    }

    jwt.verify(token, JWT_SECRET, (error, decoded) => {
        if (error) {
            return res.status(403).json({ status: 'error', message: "Blogas arba nebegaliojantis token'as" });
        }

        req.user = decoded;
        console.log(req.user);
        next();
    })
}