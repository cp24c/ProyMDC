import { DataTypes } from "sequelize";
import { db } from "../config/db.js";

export const period = db.define("period",
    {
        period_code: { type: DataTypes.STRING, primaryKey: true },
    },
    { tableName: "period", timestamps: false }
);
