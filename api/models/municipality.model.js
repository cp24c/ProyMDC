import { DataTypes } from "sequelize";
import { db } from "../config/db.js";
import { department } from "./department.model.js";

export const municipality = db.define(
  "Municipality",
  {
    municipality_code: {
      type: DataTypes.STRING(6),
      primaryKey: true,
    },
    municipality_name: {
      type: DataTypes.STRING(60),
      allowNull: false,
    },
    department_code: {
      type: DataTypes.STRING(3),
      allowNull: false,
    },
  },
  {
    tableName: "municipality",
    timestamps: false,
  }
);

municipality.belongsTo(department, { foreignKey: "departament_code" });
department.hasMany(municipality, { foreignKey: "departament_code" });
