import { connection } from "../db.js";

export async function deleteProduct(req, res) {
    const { id } = req.body;

    try {
        const sql = 'DELETE FROM products WHERE id = ?';
        const [response] = await connection.execute(sql, [id]);

        if (response.affectedRows === 0) {
            return res.status(404).json({ status: 'error', message: 'Tokios prekės neegzistuoja' });
        }

        if (response.affectedRows > 1) {
            return res.status(500).json({ status: 'error', message: 'Serverio klaida' });
        }
    } catch (error) {
        console.error(error);

        return res.status(500).json({ status: 'error', message: 'Serverio klaida' });
    }

    return res.status(200).json({ status: 'success', message: 'Prekė sėkmingai pašalinta' });
}