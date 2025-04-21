import { DataTypes } from "sequelize";
import { db } from "../config/db.js";
import { Municipio } from "./municipios.model.js";
import { Colegio } from "./colegios.model.js";

export const Estudiante = db.define(
  "Estudiante",
  {
    consecutivo: {
      type: DataTypes.STRING(20),
      primaryKey: true,
    },
    estudiante: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    tipodocumento: {
      type: DataTypes.STRING(4),
      allowNull: false,
    },
    cod_reside_mcpio: {
      type: DataTypes.STRING(6),
      allowNull: false,
    },
    cod_mcpio_presentacion: {
      type: DataTypes.STRING(6),
      allowNull: false,
    },
    fechanacimiento: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    genero: {
      type: DataTypes.CHAR(1),
      allowNull: false,
    },
    nse_individual: {
      type: DataTypes.STRING(5),
      allowNull: false,
    },
    cod_dane_sede: {
      type: DataTypes.STRING(14),
      allowNull: false,
    },
  },
  {
    tableName: "estudiantes",
    timestamps: false,
  }
);

// Estudiante.belongsTo(Municipio, { foreignKey: "cod_reside_mcpio", as: "residencia" });
// Estudiante.belongsTo(Municipio, { foreignKey: "cod_mcpio_presentacion", as: "presentacion" });
// Estudiante.belongsTo(Colegio, { foreignKey: "cod_dane_sede" });
// Colegio.hasMany(Estudiante, { foreignKey: "cod_dane_sede" });
