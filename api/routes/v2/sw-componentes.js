/**
 * @swagger
 * components:
 *   schemas:
 *     user:
 *       type: object
 *       properties:
 *         user_id:
 *           type: integer
 *           format: int64
 *           description: User id
 *         first_name:
 *           type: string
 *           maxLength: 80
 *           description: User names
 *         last_name:
 *           type: string
 *           maxLength: 80
 *           description: User's last names
 *         phone_number:
 *           type: string
 *           maxLength: 10
 *           description: Phone number of the user
 *         email:
 *           type: string
 *           maxLength: 50
 *           format: email
 *           description: User's email
 *         password:
 *           type: string
 *           format: password
 *           description: Password of the user
 *       required:
 *         - first_name
 *         - last_name
 *         - phone_number
 *         - email
 *         - password
 * 
 *   parameters:
 *     user_id:
 *       in: path
 *       name: user_id
 *       schema:
 *         type: integer
 *       required: true
 *       description: Id
 * 
 *   responses:
 *     NotFound:
 *       description: The requested resource was not found
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               error:
 *                 type: string
 *                 example: Resource not found
 *     Unauthorized:
 *       description: Unauthorized - invalid or missing credentials
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               error:
 *                 type: string
 *                 example: unauthorized
 * 
 */
/**
 * @swagger
 * components:
 *   requestBodies:
 *     UserBody:
 *       description: User data
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/user'
 */ 
