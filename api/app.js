import express, { json } from 'express';
const app = express();
const port = 3000;

import dotenv from 'dotenv';
dotenv.config();

const dbHost = process.env.DATABASE_HOST;
const dbPort = process.env.DATABASE_PORT;
const dbName = process.env.DATABASE_NAME;
const dbUser = process.env.DATABASE_USER;
const dbPassword = process.env.DATABASE_PASSWORD;

app.use(json());

app.get('/',(req,res) => {
    res.send(`Conectando a la base de datos ${dbName} en ${dbHost}:${dbPort}`);
});

app.get('/api', (req, res) => {
    res.json({ message: 'API funcionando correctamente' });
});

app.post('/api', (req, res) => {
    const data = req.body;
    res.json({ message: 'Datos recibidos', data });
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
  