import setupSwagger from './others/swagger.js';
import express from 'express';
import cors from 'cors';
import { connectDB } from './config/connectDB.js';
import icfesUploadRoutesV2 from './routes/v2/icfes.routes.js';
import { userRoutes as userRoutesV2 } from './routes/v2/user.routes.js';
import metabaseRoutesV2  from './routes/v2/metabase.routes.js'
import { keycloak, sessionKC } from './config/keycloak.js';
//imposrts from metabse

const app = express();
setupSwagger(app);
app.use(express.json());

app.use(cors({
    origin: 'http://localhost:4200'
}));

app.use(sessionKC);
app.use(keycloak.middleware());

//Routes
app.use('/api/v2/icfes', icfesUploadRoutesV2);
app.use('/api/v2/user', userRoutesV2);
app.use('/api/v2/metabase-token', metabaseRoutesV2);


connectDB()
    .then(() => {
        const port = 3000;
        app.listen(port, () => {
            console.log(`\x1b[40m■ Server running on port ${port}\x1b[0m\n`);
        });
    })
    .catch((error) => {
        console.error(`\x1b[31m[server] Error connecting to the database: ${error}\x1b[0m`);
        console.log(error)
        process.exit(1);
    });

export default app;
