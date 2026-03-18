import { connection } from "../db.js";

export async function getProducts(req, res) {
    try {
        const sql = `SELECT id, name, category, age_range, price, description, stock_quantity, is_active FROM products`;

        const [products] = await connection.execute(sql);

        return res.json({ status: 'success', products });
    }
    catch (error) {
        console.error(error);
    }
}