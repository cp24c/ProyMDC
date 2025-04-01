# GENERADOR DE INFORMES ICFES

Este proyecto contruye una base de datos para mapear los datos de los resultados
de ICFES y acceder atras de un usuario

## CARACTERISTICAS
- API contruida usando express de NODE
- Documentación API con Swagger/OpenAPI
    enlace: http://localhost:3000/api-docs
- Base de datos PostgreSQL
- Acceso a la base de datos atraves de pgADmin
- Dockerizado

## INSTRUCCIONES DE EJECUCIÓN

- Abrir una shell en la carpeta raiz del proyecto donde se encuentra docker-compose.yml
- Ejecutar el comando:
    docker-compose up -d
- Puede revisar los enpoints en: http://localhost:3000/api-docs
- Para revisar la base de datos ICFES puede usar PgAdmin en: http://localhost:80.<br>
    - Credenciales:
        - usuario: admin@admin.com
        - contraseña: adminpass
    - Crear un servidor donde:
        - nombre del servidor: cualquiera
        - host: db
        - port: 5432
        - usuario: admin
        - contraseña adminpass

nota: Todas las credenciales de los servicios puede modificarlas en el archivo docker-compose.yml
    


