export function getLogin(req, res) {
    if (req.user.isLoggedIn) {
        return res
            .status(200)
            .json({
                status: 'success',
                message: 'Tu buvai sėkmingai prijungtas prie sistemos',
                userData: {
                    id: req.user.id,
                    username: req.user.username,
                    email: req.user.email,
                }
            });
    } else {
        return res.status(401).json({ status: 'error', message: 'Tu nesi prijungtas prie sistemos' });
    }
}