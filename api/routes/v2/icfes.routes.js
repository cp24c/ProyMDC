import { Router } from "express";
import { upload } from "../../middleware/upload.middleware.js";
import { uploadIcfesFile } from "../../controllers/v2/icfes.controller.js";
import { keycloak } from "../../config/keycloak.js";

const router = Router();

/**
 * @swagger
 * /api/v2/icfes/upload/:
 *   post:
 *     summary: Uploads an ICFES file and processes the data
 *     description: This endpoint receives an ICFES `.txt` file, parses it, and stores the data in the database.
 *     tags:
 *       - ICFES
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - file
 *             properties:
 *               file:
 *                 type: string
 *                 format: binary
 *                 description: The ICFES file to upload. MUST be a `.txt` file.
 *     responses:
 *       200:
 *         description: The file was successfully processed
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "File processed successfully"
 *       400:
 *         description: Invalid file or bad request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Invalid file format. Only .txt files are allowed"
 *       500:
 *         description: Error processing the file
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Error processing file"
 */
router.post("/upload", keycloak.protect('api-admin'), upload.single("file"), uploadIcfesFile);

export default router;