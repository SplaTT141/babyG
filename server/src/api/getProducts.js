import { connection } from "../db.js";

export async function getProducts(req, res) {
    try {
        const sql = `SELECT id, name, category, age_range, price, description, stock_quantity, is_active FROM products`;

        const [products] = await connection.execute(sql);

        return res.status(200).json({ status: 'success', products });
    }
    catch (error) {
        return res.status(500).json({ status: 'error', message: 'Serverio klaida' });
    }
}