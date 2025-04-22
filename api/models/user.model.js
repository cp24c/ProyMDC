import { v4 as uuid } from 'uuid';
import { db } from "../config/db.js";
import { DataTypes } from "sequelize";

export const user = db.define("user",
  {
    user_id: {
      type: DataTypes.UUID,
      defaultValue: uuid,
      primaryKey: true
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone_number: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING,
      defaultValue: "active",
      allowNull: false,
    },
  },
  {
    tableName: "user",
    timestamps: false,
  }
);