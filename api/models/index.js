import { student } from "./student.model.js";
import { school } from "./school.model.js";
import { examSite } from "./examSite.model.js";
import { score } from "./score.model.js";
import { period } from "./period.model.js";
import { user } from "./user.model.js";

score.belongsTo(student, { foreignKey: "student_consecutive" });
student.hasOne(score, { foreignKey: "student_consecutive" });

school.hasMany(student, { foreignKey: "school_icfes_code", onDelete: 'CASCADE' });
student.belongsTo(school, { foreignKey: "school_icfes_code" });

examSite.hasMany(student, { foreignKey: "exam_site_code" });
student.belongsTo(examSite, { foreignKey: "exam_site_code" });

period.hasMany(student, { foreignKey: "period_code" });
student.belongsTo(period, { foreignKey: "period_code" });

export {
  student,
  school,
  examSite,
  score,
  user,
  period
};