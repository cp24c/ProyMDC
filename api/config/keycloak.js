import session from "express-session";
import Keycloak from "keycloak-connect";

const memoryStore = new session.MemoryStore();

const keycloak = new Keycloak({ store: memoryStore }, {
  clientId: "node-backend",
  bearerOnly: true,
  serverUrl: "http://localhost:8080",
  realm: "realm_icfes",
  credentials: {
    secret: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
  },
});

export { keycloak, memoryStore };
