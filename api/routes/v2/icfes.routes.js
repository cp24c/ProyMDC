import { Router } from "express";
import { upload } from "../../middleware/upload.middleware.js";
import { uploadIcfesFile } from "../../controllers/v2/icfes.controller.js";
import { keycloak } from "../../config/keycloak.js";

const router = Router();
router.post("/upload", keycloak.protect("realm:admin_cristian"),upload.single("file"), uploadIcfesFile);

export default router;