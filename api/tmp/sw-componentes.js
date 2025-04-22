/**
 * @swagger
 * components:
 *   schemas:
 *     Usuario:
 *       type: object
 *       properties:
 *         id_usuario:
 *           type: integer
 *           format: int64
 *           description: ID autoincremental del usuario
 *         nombres:
 *           type: string
 *           maxLength: 80
 *           description: Nombres del usuario
 *         apellidos:
 *           type: string
 *           maxLength: 80
 *           description: Apellidos del usuario
 *         telefono:
 *           type: string
 *           maxLength: 10
 *           description: Teléfono del usuario
 *         correo:
 *           type: string
 *           maxLength: 50
 *           format: email
 *           description: Correo electrónico del usuario
 *         contrasena:
 *           type: string
 *           format: password
 *           description: Contraseña encriptada
 *       required:
 *         - nombres
 *         - apellidos
 *         - correo
 *         - contrasena
 * 
 *     Departamento:
 *       type: object
 *       properties:
 *         cod_depto:
 *           type: string
 *           maxLength: 3
 *           description: Código del departamento (PK)
 *         depto:
 *           type: string
 *           maxLength: 50
 *           description: Nombre del departamento
 *       required:
 *         - cod_depto
 *         - depto
 * 
 *     Municipio:
 *       type: object
 *       properties:
 *         cod_mcpio:
 *           type: string
 *           maxLength: 6
 *           description: Código del municipio (PK)
 *         mcpio:
 *           type: string
 *           maxLength: 60
 *           description: Nombre del municipio
 *         cod_depto:
 *           type: string
 *           maxLength: 3
 *           description: Código del departamento (FK)
 *       required:
 *         - cod_mcpio
 *         - mcpio
 *         - cod_depto
 * 
 *     Colegio:
 *       type: object
 *       properties:
 *         cod_dane_sede:
 *           type: string
 *           maxLength: 14
 *           description: Código DANE de la sede (PK)
 *         area_ubicacion:
 *           type: string
 *           maxLength: 6
 *           description: Área de ubicación (Urbano/Rural)
 *         bilingue:
 *           type: string
 *           maxLength: 1
 *           enum: ['S', 'N']
 *           description: ¿Es bilingüe? (S/N)
 *         calendario:
 *           type: string
 *           maxLength: 1
 *           enum: ['A', 'B']
 *           description: Calendario (A/B)
 *         caracter:
 *           type: string
 *           maxLength: 20
 *           description: Carácter del colegio
 *         mcpio_ubicacion:
 *           type: string
 *           maxLength: 6
 *           description: Código del municipio de ubicación (FK)
 *         nombre_establecimiento:
 *           type: string
 *           maxLength: 80
 *           description: Nombre del establecimiento educativo
 *         nombre_sede:
 *           type: string
 *           maxLength: 80
 *           description: Nombre de la sede
 *         jornada:
 *           type: string
 *           maxLength: 10
 *           description: Jornada escolar
 *       required:
 *         - cod_dane_sede
 *         - nombre_establecimiento
 * 
 *     Estudiante:
 *       type: object
 *       properties:
 *         consecutivo:
 *           type: string
 *           maxLength: 20
 *           description: Consecutivo único del estudiante (PK)
 *         estudiante:
 *           type: string
 *           maxLength: 20
 *           description: Nombre o identificador del estudiante
 *         tipodocumento:
 *           type: string
 *           maxLength: 4
 *           description: Tipo de documento del estudiante
 *         cod_reside_mcpio:
 *           type: string
 *           maxLength: 6
 *           description: Código del municipio de residencia (FK)
 *         cod_mcpio_presentacion:
 *           type: string
 *           maxLength: 6
 *           description: Código del municipio de presentación (FK)
 *         fechanacimiento:
 *           type: string
 *           format: date
 *           description: Fecha de nacimiento del estudiante
 *         genero:
 *           type: string
 *           maxLength: 1
 *           enum: ['M', 'F', 'O']
 *           description: Género del estudiante (M/F/O)
 *         nse_individual:
 *           type: string
 *           maxLength: 5
 *           description: Nivel socioeconómico individual
 *         cod_dane_sede:
 *           type: string
 *           maxLength: 14
 *           description: Código DANE de la sede (FK)
 *       required:
 *         - consecutivo
 *         - estudiante
 * 
 *     Puntaje:
 *       type: object
 *       properties:
 *         estu_consecutivo:
 *           type: string
 *           maxLength: 20
 *           description: Consecutivo del estudiante (PK/FK)
 *         periodo:
 *           type: number
 *           format: double
 *           description: Periodo del examen
 *         c_naturales:
 *           type: number
 *           format: double
 *           description: Puntaje en ciencias naturales
 *         ingles:
 *           type: number
 *           format: double
 *           description: Puntaje en inglés
 *         lectura_critica:
 *           type: number
 *           format: double
 *           description: Puntaje en lectura crítica
 *         matematica:
 *           type: number
 *           format: double
 *           description: Puntaje en matemáticas
 *         sociales_ciudadanas:
 *           type: number
 *           format: double
 *           description: Puntaje en sociales y ciudadanas
 *         global:
 *           type: number
 *           format: double
 *           description: Puntaje global
 *       required:
 *         - estu_consecutivo
 *         - periodo
 * 
 *   parameters:
 *     UsuarioId:
 *       in: path
 *       name: id_usuario
 *       schema:
 *         type: integer
 *       required: true
 *       description: ID numérico del usuario
 *     DepartamentoCod:
 *       in: path
 *       name: cod_depto
 *       schema:
 *         type: string
 *         maxLength: 3
 *       required: true
 *       description: Código de 3 caracteres del departamento
 *     MunicipioCod:
 *       in: path
 *       name: cod_mcpio
 *       schema:
 *         type: string
 *         maxLength: 6
 *       required: true
 *       description: Código de 6 caracteres del municipio
 *     ColegioCod:
 *       in: path
 *       name: cod_dane_sede
 *       schema:
 *         type: string
 *         maxLength: 14
 *       required: true
 *       description: Código DANE de 14 caracteres de la sede
 *     EstudianteConsecutivo:
 *       in: path
 *       name: consecutivo
 *       schema:
 *         type: string
 *         maxLength: 20
 *       required: true
 *       description: Consecutivo único del estudiante
 * 
 *   responses:
 *     NotFound:
 *       description: El recurso solicitado no fue encontrado
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               error:
 *                 type: string
 *                 example: Recurso no encontrado
 *     Unauthorized:
 *       description: No autorizado - credenciales inválidas o faltantes
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               error:
 *                 type: string
 *                 example: No autorizado
 */