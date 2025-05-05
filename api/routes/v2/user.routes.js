import { Router } from "express";
import { getUsers, getUser, addUser, updateUser, deleteUser } from "../../controllers/v2/user.controller.js";
import { keycloak } from "../../config/keycloak.js";

export const userRoutes = Router();
/**
 * @swagger
 * /api/v2/user:
 *  get:
 *      summary: Get all users
 *      tags: [User]
 *      responses:
 *          200:
 *              description: User list
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/user'
 *           
 */
userRoutes.get("/", keycloak.protect('api-read'), getUsers);

/**
 * @swagger
 * /api/v2/user/{user_id}:
 *  get:
 *      summary: Gets a user by its ID
 *      tags: [User]
 *      parameters:
 *          - in: path
 *            name: user_id
 *            required: true
 *            description: user id
 *            schema:
 *              type: string
 *              format: int64
 *      responses:
 *          200:
 *              description: User found
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/user'
 *          404:
 *              description: User not found
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              error:
 *                                  type: string
 *                                  example: "User not found"
 */
userRoutes.get("/:user_id", keycloak.protect('api-read'), getUser);

/**
 * @swagger
 * /api/v2/user:
 *   post:
 *     summary: Add a new user
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/user'
 *           examples:
 *             validExample:
 *               summary: Valid user example
 *               value:
 *                 first_name: "María José"
 *                 last_name: "García López"
 *                 phone_number: "3101234567"
 *                 email: "maria@ejemplo.com"
 *                 password: "PasswordSeguro123"
 *             invalidExample:
 *               summary: Example with missing data
 *               value:
 *                 first_name: "María"
 *                 last_name: "García"
 *                 email: "invalid_email"
 *     responses:
 *       201:
 *         description: User created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "User created successfully"
 *                 data:
 *                   $ref: '#/components/schemas/user'
 *       400:
 *         description: Invalid input data
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "The email must be a valid address"
 *                 details:
 *                   type: array
 *                   items:
 *                     type: string
 *                   example: ["email must be a valid address", "password is required"]
 *       409:
 *         description: Email is already registered
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "The email is already registered"
 *       500:
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Error creating user"
 */
userRoutes.post("/", keycloak.protect('api-write'), addUser);

/**
 * @swagger
 * /api/v2/user/{user_id}:
 *  put:
 *      summary: Update a user by its ID
 *      tags: [User]
 *      parameters:
 *          - in: path
 *            name: user_id
 *            required: true
 *            description: User id
 *            schema:
 *              type: string
 *              format: int64
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/user'
 *                  example:
 *                      first_name: "María José"
 *                      last_name: "García López"
 *                      phone_number: "3101234567"
 *                      email: "maria@ejemplo.com"
 *                      password: "PasswordSeguro123"
 *      responses:
 *          200:
 *              description: Updated user
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/user'
 *          404:
 *              description: User not found
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              error:
 *                                  type: string
 *                                  example: "User not found"
 *          400:
 *              description: Bad request
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              error:
 *                                  type: string
 *                                  example: "Error updating user"
 */
userRoutes.put("/:user_id", keycloak.protect('api-update'), updateUser);

/**
 * @swagger
 * /api/v2/user/{user_id}:
 *  delete:
 *      summary: Delete a user by its ID
 *      tags: [User]
 *      parameters:
 *          - in: path
 *            name: user_id
 *            required: true
 *            description: user_id
 *            schema:
 *              type: string
 *              format: int64
 *      responses:
 *          200:
 *              description: User successfully deleted
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              message:
 *                                  type: string
 *                                  example: "User successfully deleted"
 *          404:
 *              description: User not found
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              error:
 *                                  type: string
 *                                  example: "User not found"
 */
userRoutes.delete("/:user_id", keycloak.protect('api-delete'), deleteUser);

