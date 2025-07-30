import express from 'express';
import { PageHome } from './pages/PageHome.js';

const app = express()
const port = 3000

app.use(express.static('public'));

app.get('/', (req, res) => res.send(new PageHome().render()));

app.listen(port, () => {
    console.log(`Server is running on: http://localhost:${port}/`)
});