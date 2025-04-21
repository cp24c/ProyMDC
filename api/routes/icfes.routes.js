import { Router } from "express";
import { upload } from "../middleware/upload.middleware";
import { processIcfesFile } from "../controllers/icfes.controller";

const router = Router();
router.post("/upload-icfes", upload.single("file"), processIcfesFile);

export default router;