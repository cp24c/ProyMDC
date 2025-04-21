import fs from "fs-extra/esm";
import readline from "readline";

export const processIcfesFile = async (req, res) => {
    try {
        const filePath = req.file.path;
        const fileStream = fs.createReadStream(filePath);
        const rl = readline.createInterface({input: fileStream});

        const rows = [];
        let isFirstLine = true;

        for await (const line of rl) {
            if (isFirstLine) {
                isFirstLine = false;
                continue; // Skip the first line
            }
            const fields = line.split(";");
            rows.push(fields);
        }
        res.status(200).json({ message: "File processed successfully", rows });
        await processIcfesFile(rows);
    } catch (error) {
        console.error("Error processing file:", error);
        res.status(500).json({ message: "Error processing file" });
    }
};