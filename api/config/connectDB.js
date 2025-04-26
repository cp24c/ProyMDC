import { db } from "./db.js";

export const connectDB = async () => {
    try {
        await db.authenticate();
        console.log(`\x1b[36m[database] Connection established\x1b[0m`);

        await db.sync({
            alter: true,
            force: true
        });
    } catch (error) {
        throw error;
    }
};