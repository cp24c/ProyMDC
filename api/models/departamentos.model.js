import { DataTypes } from "sequelize";
import { db } from "../config/db.js";

export const Departamento = db.define(
  "Departamento",
  {
    cod_depto: {
      type: DataTypes.STRING(3),
      primaryKey: true,
    },
    depto: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
  },
  {
    tableName: "departamentos",
    timestamps: false,
  }
);
