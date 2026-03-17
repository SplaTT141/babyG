import { connection } from "../db.js";

export async function postProduct(req, res) {
    const { name, description, price, quantity, age, category } = req.body;

    try {
        const sql = `INSERT INTO products (name, description, price, stock_quantity, age_range, category) VALUES (?, ?, ?, ?, ?, ?)`;

        const [response] = await connection.execute(sql, [name, description, price, quantity, age, category]);

        if (response.affectedRows !== 1) {
            return res.status(500).json({ status: 'error', message: 'Serverio klaida' });
        }

        return res.status(201).json({ status: 'success', message: 'Produktas pridėtas sėkmingai' });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ status: 'error', message: 'Serverio klaida' });
    }
}