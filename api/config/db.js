import { Sequelize } from "sequelize";

const env = process.env.NODE_ENV || 'development';

const seqConfigDB = (env === 'development') ?
    {
        dialect: 'sqlite',
        storage: './dev.sqlite',
        logging: false
    } : {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        dialect: 'postgres',
        logging: false,
        retry: {
            max: 5
        },
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
    }

export const db = new Sequelize(seqConfigDB);