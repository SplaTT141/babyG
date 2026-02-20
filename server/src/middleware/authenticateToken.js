import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../env.js';

export function authenticateToken(req, res, next) {
    const token = req.cookies.token;
    req.user = { isLoggedIn: false };

    if (!token) {
        return next();
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET);

        req.user = {
            ...decoded,
            isLoggedIn: true,
        };

        return next();
    }
    catch (error) {
        return next();
    }
}