import { DataTypes } from "sequelize";
import { db } from "../config/db.js";

export const examSite = db.define("examSite",
  {
    exam_site_code: { type: DataTypes.STRING, primaryKey: true },
    exam_site_name: DataTypes.STRING,
    exam_department_code: DataTypes.STRING,
    exam_department_name: DataTypes.STRING,
    exam_municipality_code: DataTypes.STRING,
    exam_municipality_name: DataTypes.STRING
  },
  { tableName: "examSite", timestamps: false }
);