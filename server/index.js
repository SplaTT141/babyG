import express from "express";
import cors from "cors";
import { PORT } from "./src/env.js";
import { postLogin } from "./src/api/postLogin.js";

const app = express();

app.use(cors({
    origin: 'http://localhost:5173',
}))
app.use(express.json());

app.get('/', (req, res) => { res.send("It's alive!") });

app.post('/login', postLogin);

app.listen(PORT, () => {
    console.log(`Server is running on: http://localhost:${PORT}`);
})