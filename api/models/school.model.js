import { DataTypes } from "sequelize";
import { db } from "../config/db.js";

export const school = db.define("school",
  {
    school_icfes_code: { type: DataTypes.STRING, primaryKey: true },
    school_dane_code: DataTypes.STRING,
    school_name: DataTypes.STRING,
    school_department_code: DataTypes.STRING,
    school_department_name: DataTypes.STRING,
    school_municipality_code: DataTypes.STRING,
    school_municipality_name: DataTypes.STRING,
    school_nature: DataTypes.STRING,
    school_character: DataTypes.STRING,
    school_calendar: DataTypes.STRING,
    school_shift: DataTypes.STRING,
    school_gender: DataTypes.STRING,
    school_area: DataTypes.STRING,
    school_bilingual: DataTypes.STRING
  },
  { tableName: "school", timestamps: false }
);