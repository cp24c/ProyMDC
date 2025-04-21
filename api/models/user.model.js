import { DataTypes, UUIDV4 } from "sequelize";
import { db } from "../config/db.js";
import { v4 as uuid} from 'uuid';

export const Usuario = db.define(
    "Usuario",
    {
        id_usuario: {
            type: DataTypes.UUID,
            defaultValue: uuid,
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