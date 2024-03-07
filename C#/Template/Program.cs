using Template;

// Generating a PDF report
CvReportGeneration cvReportGeneration = new PdfCVReportGeneration();
cvReportGeneration.GenerateReport("path/to/cv.pdf");


// Generating a Image report
cvReportGeneration = new ImageCVReportGeneration();
cvReportGeneration.GenerateReport("path/to/cv.png");

// Generating a Word report
cvReportGeneration = new WordCVReportGeneration();
cvReportGeneration.GenerateReport("path/to/cv.docx");
