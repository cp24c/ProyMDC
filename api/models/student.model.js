import { DataTypes } from "sequelize";
import { db } from "../config/db.js";

export const student = db.define("student",
  {
    student_consecutive: { type: DataTypes.STRING, allowNull: false, primaryKey: true },
    student_document_type: DataTypes.STRING,
    student_gender: DataTypes.STRING,
    student_birth_date: DataTypes.DATEONLY,
    residence_department_code: DataTypes.STRING,
    residence_department_name: DataTypes.STRING,
    residence_municipality_code: DataTypes.STRING,
    residence_municipality_name: DataTypes.STRING,
    socioeconomic_level: DataTypes.STRING,
    student_disability: DataTypes.STRING,
    student_detained: DataTypes.STRING,
    school_icfes_code: DataTypes.STRING,
    exam_site_code: DataTypes.STRING,
    period_code: DataTypes.STRING
  },
  {
    tableName: "student",
    timestamps: false,
  }
);