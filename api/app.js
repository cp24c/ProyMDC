import setupSwagger from './swagger.js';
import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.js';
import { usuarioRoutes } from './routes/usuario.routes.js';
import { estudiantesRoutes } from './routes/estudiantes.routes.js';

const app = express();
app.use(cors());
app.use(express.json());
setupSwagger(app);

//Routes
app.use('/estudiantes', estudiantesRoutes);


app.use('/usuarios', usuarioRoutes);

const port = 3000;
app.listen(port, () => {
    console.log(`\x1b[34m■ Servidor corriendo en el puerto ${port} => http://localhost:${port}\x1b[0m`);
});

connectDB();

export default app;
