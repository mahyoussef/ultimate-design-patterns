class AnalyzedData {}

class Data {}

class FileInfo {
  constructor(public name: string) {}
}

class GeneratedReport {
  constructor(private _isPassed: boolean) {}

  isPassed(): boolean {
    return this._isPassed;
  }
}

abstract class CVReportGeneration {
  generateCVReport(cvFilePath: string): GeneratedReport {
    const file = this.readFile(cvFilePath);
    const extractedData = this.extractData(file);
    const analyzedData = this.analyzeData(extractedData);
    return this.generateReportOf(analyzedData);
  }

  protected abstract extractData(file: FileInfo): Data;

  private readFile(filePath: string): FileInfo {
    console.log("reading file from: " + filePath);
    return new FileInfo(filePath);
  }

  private analyzeData(data: Data): AnalyzedData {
    console.log("analyzing data...");
    return new AnalyzedData();
  }

  private generateReportOf(analyzedData: AnalyzedData): GeneratedReport {
    console.log("generating report...");
    return new GeneratedReport(true);
  }
}

class ImageCVReportGeneration extends CVReportGeneration {
  override extractData(file: FileInfo): Data {
    console.log("extracting data from image");
    return new Data();
  }
}

class PdfCVReportGeneration extends CVReportGeneration {
  override extractData(file: FileInfo): Data {
    console.log("extracting data from PDF");
    return new Data();
  }
}

class WordCVReportGeneration extends CVReportGeneration {
  override extractData(file: FileInfo): Data {
    console.log("extracting data from word file");
    return new Data();
  }
}

// example usage
const pdfCVReportGeneration = new PdfCVReportGeneration();
const pdfGeneratedReport = pdfCVReportGeneration.generateCVReport("cv.pdf");
console.log(pdfGeneratedReport.isPassed());

const wordCVReportGeneration = new WordCVReportGeneration();
const wordGeneratedReport = wordCVReportGeneration.generateCVReport("cv.docx");
console.log(wordGeneratedReport.isPassed());

const imageCVReportGeneration = new ImageCVReportGeneration();
const imageGeneratedReport = imageCVReportGeneration.generateCVReport("cv.png");
console.log(imageGeneratedReport.isPassed());
