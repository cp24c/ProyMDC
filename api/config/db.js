import { Sequelize} from "sequelize";
import dotenv from 'dotenv';
import path from 'path';

const env = process.env.NODE_ENV || 'development';

dotenv.config({path: path.resolve(process.cwd(), `.env.${env}`)});

export const db = new Sequelize( {
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    database: process.env.DATABASE_NAME,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    dialect: 'postgres',
    logging: false,
    // dialectOptions: {
    //     ssl: {
    //         require: true, // This will be set to true in production
    //         rejectUnauthorized: false
    //     }
    // }
});