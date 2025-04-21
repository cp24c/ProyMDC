import { Sequelize } from "sequelize";
import dotenv from 'dotenv';

dotenv.config();

export const db = new Sequelize(process.env.DB, {
    /*host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    database: process.env.DATABASE_NAME,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,*/
    dialect: 'postgres',
    logging: false,
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
});

export const connectDB = async () => {
    try {
        await db.authenticate();
        console.log("Connected to the database");

        await db.sync({
            alter: true,
            // force: true
        });
    } catch (error) {
        console.log("database connection error");
        console.log(error);
    }
};