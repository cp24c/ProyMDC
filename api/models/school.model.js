import { DataTypes } from "sequelize";
import { db } from "../config/db.js";
import { municipality } from "./municipality.model.js";

export const school = db.define(
  "School",
  {
    cod_dane_sede: {
      type: DataTypes.STRING(14),
      primaryKey: true,
    },
    area_ubicacion: {
      type: DataTypes.STRING(6),
      allowNull: false,
    },
    bilingue: {
      type: DataTypes.CHAR(1),
      allowNull: false,
    },
    calendario: {
      type: DataTypes.CHAR(1),
      allowNull: false,
    },
    caracter: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    mcpio_ubicacion: {
      type: DataTypes.STRING(6),
      allowNull: false,
    },
    nombre_establecimiento: {
      type: DataTypes.STRING(80),
      allowNull: false,
    },
    nombre_sede: {
      type: DataTypes.STRING(80),
      allowNull: false,
    },
    jornada: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
  },
  {
    tableName: "school",
    timestamps: false,
  }
);

school.belongsTo(municipality, { foreignKey: "mcpio_ubicacion" });
municipality.hasMany(school, { foreignKey: "mcpio_ubicacion" });
