import fs from "fs-extra";
import { parse } from "csv-parse";
import { headerMap } from "../../utils/headerMap.js";
import { period, examSite, school, student, score } from "../../models/index.js";

export const uploadIcfesFile = async (req, res) => {
    try {
        const filePath = req.file.path;

        const parser = fs.createReadStream(filePath).pipe(parse({ delimiter: ";", columns: true }));

        for await (const row of parser) {
            const mapped = {};
            for (const [original, internal] of Object.entries(headerMap)) {
                if (row[original] !== undefined) {
                    mapped[internal] = row[original].trim();
                }
            }

            // period
            if (mapped.period_code) {
                await period.findOrCreate({
                    where: { period_code: mapped.period_code },
                });
            };

            // examSite
            if (mapped.exam_site_code) {
                await examSite.findOrCreate({
                    where: { exam_site_code: mapped.exam_site_code },
                    defaults: {
                        exam_department_code: mapped.exam_department_code || null,
                        exam_department_name: mapped.exam_department_name || null,
                        exam_municipality_code: mapped.exam_municipality_code || null,
                        exam_municipality_name: mapped.exam_municipality_name || null,
                        exam_site_name: mapped.exam_site_name || null,
                    }
                });
            };

            // school
            if (mapped.school_icfes_code) {
                await school.findOrCreate({
                    where: { school_icfes_code: mapped.school_icfes_code },
                    defaults: {
                        school_dane_code: mapped.school_dane_code || null,
                        school_name: mapped.school_name || null,
                        school_department_code: mapped.school_department_code || null,
                        school_department_name: mapped.school_department_name || null,
                        school_municipality_code: mapped.school_municipality_code || null,
                        school_municipality_name: mapped.school_municipality_name || null,
                        school_nature: mapped.school_nature || null,
                        school_character: mapped.school_character || null,
                        school_calendar: mapped.school_calendar || null,
                        school_shift: mapped.school_shift || null,
                        school_gender: mapped.school_gender || null,
                        school_area: mapped.school_area || null,
                        school_bilingual: mapped.school_bilingual || null
                    }
                });
            }

            // student
            if (mapped.student_consecutive) {
                if (mapped.student_birth_date != "") {
                    let birth_date = mapped.student_birth_date.split("/");
                    mapped.student_birth_date = birth_date[2] + "-" + birth_date[1] + "-" + birth_date[0];
                } else {
                    mapped.student_birth_date = null;
                };
                await student.upsert({
                    student_consecutive: mapped.student_consecutive,
                    student_document_type: mapped.student_document_type || null,
                    student_gender: mapped.student_gender || null,
                    student_birth_date: mapped.student_birth_date || null,
                    residence_department_code: mapped.residence_department_code || null,
                    residence_department_name: mapped.residence_department_name || null,
                    residence_municipality_code: mapped.residence_municipality_code || null,
                    residence_municipality_name: mapped.residence_municipality_name || null,
                    socioeconomic_level: mapped.socioeconomic_level || null,
                    student_disability: mapped.student_disability || null,
                    student_detained: mapped.student_detained || null,

                    //relations
                    school_icfes_code: mapped.school_icfes_code || null,
                    exam_site_code: mapped.exam_site_code || null,
                    period_code: mapped.period_code || null
                });
            }

            // score
            if (mapped.student_consecutive) {
                await score.upsert({
                    student_consecutive: mapped.student_consecutive,
                    score_critical_reading: mapped.score_critical_reading || null,
                    score_math: mapped.score_math || null,
                    score_social_citizenship: mapped.score_social_citizenship || null,
                    score_natural_sciences: mapped.score_natural_sciences || null,
                    score_english: mapped.score_english || null,
                    score_global: mapped.score_global || null,
                });
            }

        }

        return res.status(200).json({ message: "File processed succesfully" });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Error processing file" });
    }
};
