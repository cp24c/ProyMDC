import { DataTypes } from "sequelize";
import { db } from "../config/db.js";

export const department = db.define(
  "department_model",
  {
    department_code: {
      type: DataTypes.STRING(3),
      primaryKey: true,
      allowNull: false
    },
    department_name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
  },
  {
    tableName: "departament",
    timestamps: false,
  }
);
