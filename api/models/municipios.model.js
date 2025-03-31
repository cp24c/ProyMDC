import { DataTypes } from "sequelize";
import { db } from "../config/db.js";
import { Departamento } from "./departamentos.model.js";

export const Municipio = db.define(
  "Municipio",
  {
    cod_mcpio: {
      type: DataTypes.STRING(6),
      primaryKey: true,
    },
    mcpio: {
      type: DataTypes.STRING(60),
      allowNull: false,
    },
    cod_depto: {
      type: DataTypes.STRING(3),
      allowNull: false,
    },
  },
  {
    tableName: "municipios",
    timestamps: false,
  }
);

Municipio.belongsTo(Departamento, { foreignKey: "cod_depto" });
Departamento.hasMany(Municipio, { foreignKey: "cod_depto" });
