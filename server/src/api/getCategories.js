import { connection } from "../db.js";

export async function getCategories(req, res) {
    try {
        const sql = `SELECT * FROM categories`

        const [categories] = await connection.execute(sql);

        return res.status(200).json({ status: 'success', categories });
    }
    catch (error) {
        return res.status(500).json({ status: 'error', message: 'Serverio klaida' });
    }
}