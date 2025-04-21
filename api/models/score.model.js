import { DataTypes } from "sequelize";
import { db } from "../config/db.js";
import { Estudiante } from "./estudiantes.model.js";

export const Puntaje = db.define(
  "Puntaje",
  {
    estu_consecutivo: {
      type: DataTypes.STRING(20),
      primaryKey: true,
    },
    periodo: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    c_naturales: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    ingles: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    lectura_critica: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    matematica: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    sociales_ciudadanas: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    global: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "puntajes",
    timestamps: false,
  }
);

Puntaje.belongsTo(Estudiante, { foreignKey: "estu_consecutivo" });
Estudiante.hasOne(Puntaje, { foreignKey: "estu_consecutivo" });
