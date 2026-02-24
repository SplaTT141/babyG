import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { PORT } from "./src/env.js";
import { postLogin } from "./src/api/postLogin.js";
import { authenticateToken } from "./src/middleware/authenticateToken.js";
import { getLogin } from "./src/api/getLogin.js";
import { isAdmin } from "./src/middleware/isAdmin.js";
import { postLogout } from "./src/api/postLogout.js";

const app = express();

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
}))
app.use(express.json());
app.use(cookieParser());
app.use(authenticateToken);

app.get('/', (req, res) => { res.send("It's alive!") });
app.get('/api/login', getLogin);

app.post('/api/login', postLogin);
app.post('/api/logout', postLogout);

app.listen(PORT, () => {
    console.log(`Server is running on: http://localhost:${PORT}`);
})