import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

<<<<<<< HEAD
=======
// Necesario para usar __dirname en ES modules
>>>>>>> 6216567ed0a56aba9ae18adde4fe32700a191ef4
const __dirname = dirname(fileURLToPath(import.meta.url));

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Mi API Node.js',
      version: '1.0.0',
      description: 'Documentación de mi API',
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Servidor de desarrollo',
      },
    ],
  },
<<<<<<< HEAD
  apis: [join(__dirname, './routes/*.js')],
=======
  apis: [join(__dirname, './*.js')], // Usamos path.join para rutas multiplataforma
>>>>>>> 6216567ed0a56aba9ae18adde4fe32700a191ef4
};

const specs = swaggerJsdoc(options);

// Exportamos como función ES module
export default (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
  
  // Ruta opcional para ver el JSON generado
  app.get('/api-docs-json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(specs);
  });
};