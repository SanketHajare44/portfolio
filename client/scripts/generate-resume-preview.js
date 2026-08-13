import { execFileSync } from "child_process";
import { existsSync, unlinkSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectRoot = path.resolve(__dirname, "..");

const publicDir = path.join(projectRoot, "public");

const pdfPath = path.join(
    publicDir,
    "Sanket_Hajare.pdf"
);

const outputPrefix = path.join(
    publicDir,
    "Sanket_Hajare"
);

if (!existsSync(pdfPath)) {
    console.error(
        "❌ Resume PDF not found:",
        pdfPath
    );

    process.exit(1);
}

console.log("Generating resume preview images...");

try {
    /*
     * Remove old generated preview images.
     *
     * This prevents old pages from remaining when
     * you change a 3-page resume to a 2-page resume.
     */

    for (let page = 1; page <= 50; page++) {

        const pageFile = path.join(
            publicDir,
            `Sanket_Hajare-${page}.png`
        );

        if (existsSync(pageFile)) {
            unlinkSync(pageFile);
        }
    }


    /*
     * Convert every PDF page into a PNG.
     *
     * -png       → PNG output
     * -r 300     → 300 DPI / high quality
     *
     * If PDF has:
     *
     * 1 page → Sanket_Hajare-1.png
     * 2 pages → Sanket_Hajare-1.png
     *             Sanket_Hajare-2.png
     * 3 pages → Sanket_Hajare-1.png
     *             Sanket_Hajare-2.png
     *             Sanket_Hajare-3.png
     */

    execFileSync(
        "pdftoppm",
        [
            "-png",
            "-r",
            "300",
            pdfPath,
            outputPrefix,
        ],
        {
            stdio: "inherit",
        }
    );


    console.log(
        "✅ Resume preview generated successfully."
    );

} catch (error) {

    console.error(
        "❌ Failed to generate resume preview."
    );

    process.exit(1);
}