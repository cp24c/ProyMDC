import { DataTypes } from "sequelize";
import { db } from "../config/db.js";
import { Municipio } from "./municipios.model.js";

export const Colegio = db.define(
  "Colegio",
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
    tableName: "colegios",
    timestamps: false,
  }
);

Colegio.belongsTo(Municipio, { foreignKey: "mcpio_ubicacion" });
Municipio.hasMany(Colegio, { foreignKey: "mcpio_ubicacion" });
