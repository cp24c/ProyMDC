import { DataTypes } from "sequelize";
import { db } from "../config/db.js";

export const Usuario = db.define(
    "Usuario",
    {
        id_usuario: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombres: {
            type: DataTypes.STRING(80),
            allowNull: false,
        },
        apellidos: {
            type: DataTypes.STRING(80),
            allowNull: false,
        },
        telefono: {
            type: DataTypes.CHAR(10),
            allowNull: false,
        },
        correo: {
            type: DataTypes.STRING(50),
            allowNull: false,
            unique: true,
        },
        contrasena: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
    },
    {
        tableName: "usuarios",
        timestamps: false,
    }
);