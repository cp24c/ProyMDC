import setupSwagger from './others/swagger.js';
import express from 'express';
import cors from 'cors';
import { connectDB } from './config/connectDB.js';
import icfesUploadRoutesV2 from './routes/v2/icfes.routes.js';
import { userRoutes as userRoutesV2 } from './routes/v2/user.routes.js';
// import { keycloak, memoryStore } from './config/keycloak.js';
// import session from 'express-session';

const app = express();
app.use(cors());
app.use(express.json());

// Keycloak
// app.use(session({
//     secret: "super-secret-key",
//     resave: false,
//     saveUninitialized: true,
//     store: memoryStore
// }));
// app.use(keycloak.middleware());

setupSwagger(app);

//Routes
app.use('/api/v2/icfes', icfesUploadRoutesV2);
app.use('/api/v2/user', userRoutesV2);



connectDB()
    .then(() => {
        const port = 3000;
        app.listen(port, () => {
            console.log(`\x1b[40m■ Server running on port ${port} => http://localhost:${port}\x1b[0m\n`);
        });
    })
    .catch((error) => {
        console.error(`\x1b[31m[server] Error connecting to the database: ${error}\x1b[0m`);
        console.log(error)
        process.exit(1);
    });

export default app;
