import { DataTypes } from "sequelize";
import { db } from "../config/db.js";

export const score = db.define("score", {
  student_consecutive: DataTypes.STRING,
  score_critical_reading: DataTypes.INTEGER,
  score_math: DataTypes.INTEGER,
  score_social_citizenship: DataTypes.INTEGER,
  score_natural_sciences: DataTypes.INTEGER,
  score_english: DataTypes.INTEGER,
  score_global: DataTypes.INTEGER
},
  {
    tableName: "score",
    timestamps: false,
  }
);