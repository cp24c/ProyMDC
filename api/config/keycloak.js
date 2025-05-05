import session from 'express-session';
import Keycloak from 'keycloak-connect';
import dotenv from 'dotenv';

if (process.env.NODE_ENV === 'development') dotenv.config();

const memoryStore = new session.MemoryStore();

const kcConfig = {
    clientId: process.env.KEYCLOAK_CLIENT_ID,
    bearerOnly: true,
    serverUrl: process.env.KEYCLOAK_SERVER_URL,
    realm: process.env.KEYCLOAK_REALM,
    realmPublicKey: process.env.KEYCLOAK_REALM_PUBLIC_KEY,
    credentials: {
        secret: process.env.KEYCLOAK_SECRET
    },
}

const keycloak = new Keycloak({ store: memoryStore }, kcConfig);

const sessionKC = session({
    secret: process.env.SESSION_SECRET || 'fallback-secret-for-dev',
    resave: false,
    saveUninitialized: true,
    store: memoryStore,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24
    }
})

export { keycloak, sessionKC };