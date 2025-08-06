import express from "express";

const app = express();
const port = 5000;

app.get('/', (req, res) => {
    return res.json({
        status: 'success',
        message: 'Server is running',
    })
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})