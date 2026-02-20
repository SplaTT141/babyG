export function isAdmin(req, res, next) {
    if (!req.user.isLoggedIn) {
        return res
            .status(401)
            .json({
                status: 'error',
                message: 'Šis maršrutas yra apsaugotas – pirmiausia prisijunkite.'
            });
    }

    return next();
}