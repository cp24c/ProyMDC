import { Router } from "express";
import { getUsuarios, getUsuario, createUsuario, updateUsuario, deleteUsuario } from "../controllers/usuario.controller.js";

export const usuarioRoutes = Router();
/**
 * @swagger
 * /usuarios:
 *  get:
 *      summary: Obtiene todas los usuarios
 *      tags: [Usuario]
 *      responses:
 *          200:
 *              description: Lista de usuarios
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/Usuario'
 *           
 * 
 */
usuarioRoutes.get("/", getUsuarios);

/**
 * @swagger
 * /usuarios/{id}:
 *  get:
 *      summary: Obtiene un usuario por su ID
 *      tags: [Usuario]
 *      parameters:
 *          - in: path
 *            name: id
 *            required: true
 *            description: ID del usuario
 *            schema:
 *              type: integer
 *              format: int64
 *      responses:
 *          200:
 *              description: Usuario encontrado
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Usuario'
 *          404:
 *              description: Usuario no encontrado
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              error:
 *                                  type: string
 *                                  example: "Usuario no encontrado"
 */
usuarioRoutes.get("/:id", getUsuario)

/**
 * @swagger
 * /usuarios:
 *   post:
 *     summary: Crear un nuevo usuario
 *     tags: [Usuario]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Usuario'
 *           examples:
 *             ejemploValido:
 *               summary: Ejemplo de usuario válido
 *               value:
 *                 nombres: "María José"
 *                 apellidos: "García López"
 *                 telefono: "3101234567"
 *                 correo: "maria@ejemplo.com"
 *                 contrasena: "PasswordSeguro123"
 *             ejemploInvalido:
 *               summary: Ejemplo con datos faltantes
 *               value:
 *                 nombres: "Carlos"
 *                 apellidos: "Pérez"
 *                 correo: "correo_invalido"
 *     responses:
 *       201:
 *         description: Usuario creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 mensaje:
 *                   type: string
 *                   example: "Usuario creado exitosamente"
 *                 datos:
 *                   $ref: '#/components/schemas/Usuario'
 *       400:
 *         description: Datos de entrada inválidos
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "El correo debe ser una dirección válida"
 *                 detalles:
 *                   type: array
 *                   items:
 *                     type: string
 *                   example: ["correo debe ser una dirección válida", "contrasena es requerida"]
 *       409:
 *         description: Conflicto - El correo ya está registrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "El correo ya está registrado"
 *       500:
 *         description: Error interno del servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Error al crear el usuario"
 */
usuarioRoutes.post("/", createUsuario);

/**
 * @swagger
 * /usuarios/{id}:
 *  put:
 *      summary: Actualiza los datos de un usuario
 *      tags: [Usuario]
 *      parameters:
 *          - in: path
 *            name: id
 *            required: true
 *            description: ID del usuario
 *            schema:
 *              type: integer
 *              format: int64
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Usuario'
 *                  example:
 *                      nombres: "Sandra"
 *                      apellidos: "Lopez"
 *                      telefono: "3054587878"
 *                      correo: "salop@gmail.com"
 *                      contrasena: "secreto2"
 *      responses:
 *          200:
 *              description: Usuario actualizado
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Usuario'
 *          404:
 *              description: Usuario no encontrado
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              error:
 *                                  type: string
 *                                  example: "Usuario no encontrado"
 *          400:
 *              description: Solicitud incorrecta
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              error:
 *                                  type: string
 *                                  example: "Error al actualizar usuario"
 */
usuarioRoutes.put("/:id", updateUsuario);

/**
 * @swagger
 * /usuarios/{id}:
 *  delete:
 *      summary: Elimina un usuario por su ID
 *      tags: [Usuario]
 *      parameters:
 *          - in: path
 *            name: id
 *            required: true
 *            description: ID del usuario
 *            schema:
 *              type: integer
 *              format: int64
 *      responses:
 *          200:
 *              description: Usuario eliminado exitosamente
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              mensaje:
 *                                  type: string
 *                                  example: "Usuario eliminado correctamente"
 *          404:
 *              description: Usuario no encontrado
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              error:
 *                                  type: string
 *                                  example: "Usuario no encontrado"
 */
usuarioRoutes.delete("/:id", deleteUsuario);