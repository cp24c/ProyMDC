import { Router } from "express";
import { upload } from "../../middleware/upload.middleware.js";
import { uploadIcfesFile } from "../../controllers/v2/icfes.controller.js";

const router = Router();
router.post("/upload", upload.single("file"), uploadIcfesFile);

export default router;