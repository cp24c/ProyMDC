import { Router } from "express";
import {
    createEstudiante,
    getEstudiantes,
    getEstudianteByConsecutivo,
    deleteEstudiante,
} from "../../controllers/v1/estudiantes.controller.js";

export const estudiantesRoutes = Router();

/**
 * @swagger
 * /estudiantes:
 *  post:
 *      summary: Crea un nuevo estudiante
 *      tags: [Estudiante]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Estudiante'
 *                  example:
 *                      consecutivo: "123456"
 *                      estudiante: "Juan Perez"
 *                      tipodocumento: "CC"
 *                      cod_reside_mcpio: "123456"
 *                      cod_mcpio_presentacion: "654321"
 *                      fechanacimiento: "2005-10-15"
 *                      genero: "M"
 *                      nse_individual: "3"
 *                      cod_dane_sede: "110010000001"
 *      responses:
 *          201:
 *              description: Estudiante creado exitosamente
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              message:
 *                                  type: string
 *                                  example: "Estudiante creado exitosamente"
 *                              estudiante:
 *                                  $ref: '#/components/schemas/Estudiante'
 *          400:
 *              description: Solicitud incorrecta
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              message:
 *                                  type: string
 *                                  example: "El municipio de residencia no existe."
 *          500:
 *              description: Error interno del servidor
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              message:
 *                                  type: string
 *                                  example: "Error interno del servidor"
 */
estudiantesRoutes.post("/", createEstudiante);

/**
 * @swagger
 * /estudiantes:
 *  get:
 *      summary: Obtiene todos los estudiantes
 *      tags: [Estudiante]
 *      responses:
 *          200:
 *              description: Lista de estudiantes
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/Estudiante'
 *          500:
 *              description: Error interno del servidor
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              error:
 *                                  type: string
 *                                  example: "Error al obtener estudiantes"
 */
estudiantesRoutes.get("/", getEstudiantes);

/**
 * @swagger
 * /estudiantes/{consecutivo}:
 *  get:
 *      summary: Obtiene un estudiante por su consecutivo
 *      tags: [Estudiante]
 *      parameters:
 *          - in: path
 *            name: consecutivo
 *            required: true
 *            description: Consecutivo único del estudiante
 *            schema:
 *              type: string
 *              maxLength: 20
 *      responses:
 *          200:
 *              description: Estudiante encontrado
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Estudiante'
 *          404:
 *              description: Estudiante no encontrado
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              message:
 *                                  type: string
 *                                  example: "Estudiante no encontrado"
 *          500:
 *              description: Error interno del servidor
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              error:
 *                                  type: string
 *                                  example: "Error al obtener el estudiante"
 */
estudiantesRoutes.get("/:consecutivo", getEstudianteByConsecutivo);

/**
 * @swagger
 * /estudiantes/{consecutivo}:
 *  delete:
 *      summary: Elimina un estudiante por su consecutivo
 *      tags: [Estudiante]
 *      parameters:
 *          - in: path
 *            name: consecutivo
 *            required: true
 *            description: Consecutivo único del estudiante
 *            schema:
 *              type: string
 *              maxLength: 20
 *      responses:
 *          200:
 *              description: Estudiante eliminado
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              message:
 *                                  type: string
 *                                  example: "Estudiante eliminado"
 *          404:
 *              description: Estudiante no encontrado
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              message:
 *                                  type: string
 *                                  example: "Estudiante no encontrado"
 *          500:
 *              description: Error interno del servidor
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              error:
 *                                  type: string
 *                                  example: "Error al eliminar el estudiante"
 */
estudiantesRoutes.delete("/:consecutivo", deleteEstudiante);