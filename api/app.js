import express, { json } from 'express';
import setupSwagger from './swagger.js'; 
const app = express();
const port = 3000;
import pg from 'pg';
const { Client } = pg;

setupSwagger(app);

import dotenv from 'dotenv';
dotenv.config();

const dbHost = process.env.DATABASE_HOST;
const dbPort = process.env.DATABASE_PORT;
const dbName = process.env.DATABASE_NAME;
const dbUser = process.env.DATABASE_USER;
const dbPassword = process.env.DATABASE_PASSWORD;


const client = new Client({
    host: dbHost,
    port: dbPort,
    database: dbName,
    user: dbUser,
    password: dbPassword,
});

client.connect()
.then(() => console.log('Conectado a la base de datos PostgreSQL'))
.catch((err) => console.error('Error de conexión a la base de datos:', err));

/**
 * @swagger
 * components:
 *  schemas:
 *      Prueba:
 *          type: object
 *          required:
 *              - id
 *          properties:
 *              id:
 *                  type: string
 *                  description: ID autogenerado
 *              nombre:
 *                  type: string
 *          example:
 *              id: 1
 *              nombre: Test 1
 *              
 */


app.get('/',(req,res) => {
    res.send(`Conectando a la base de datos ${dbName} en ${dbHost}:${dbPort}`);
});

app.use(json());

/**
 * @swagger
 * /api/prueba:
 *  get:
 *      summary: Obtiene todas las pruebas
 *      tags: [Prueba]
 *      responses:
 *          200:
 *              description: Lista de pruebas
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/Prueba'
 *           
 * 
 */

app.get('/api/prueba', async (req, res) => {
    try {
        // Realizar una consulta a la tabla 'prueba'
        const result = await client.query('SELECT * FROM prueba');
        res.json({ message: 'Datos de la tabla prueba', data: result.rows });
    } catch (err) {
        console.error('Error al consultar la tabla prueba:', err);
        res.status(500).json({ error: 'Error al consultar la base de datos' });
    }
});


app.post('/api', (req, res) => {
    const data = req.body;
    res.json({ message: 'Datos recibidos', data });
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});

  