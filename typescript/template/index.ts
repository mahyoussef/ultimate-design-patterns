import { ImageCVReportGeneration } from "./image-cv-report-generation";
import { PdfCVReportGeneration } from "./pdf-cv-report-generation";
import { WordCVReportGeneration } from "./word-cv-report-generation";

const pdfCVReportGeneration = new PdfCVReportGeneration();
const pdfGeneratedReport = pdfCVReportGeneration.generateCVReport("cv.pdf");
console.log(pdfGeneratedReport.isPassed());

const wordCVReportGeneration = new WordCVReportGeneration();
const wordGeneratedReport = wordCVReportGeneration.generateCVReport("cv.docx");
console.log(wordGeneratedReport.isPassed());

const imageCVReportGeneration = new ImageCVReportGeneration();
const imageGeneratedReport = imageCVReportGeneration.generateCVReport("cv.png");
console.log(imageGeneratedReport.isPassed());
