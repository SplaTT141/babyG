import { COOKIE_SECURE, COOKIE_MAX_AGE } from "../env.js";

export function postLogout(req, res) {
    try {
        const token = req.cookies.token;

        if (!token) {
            return res.status(401).json({ status: 'error', message: 'Vartotojas yra neprisijungęs' });
        }

        res.clearCookie('token', {
            httpOnly: true,
            secure: COOKIE_SECURE,
            sameSite: 'Lax',
            path: '/',
        });

        return res.status(200).json({ status: 'success', message: "Atsijungėte sėkmingai" });
    } catch (error) {
        return res.status(400).json({ status: 'error', message: "Atsijungti nepavyko" });
    }
}