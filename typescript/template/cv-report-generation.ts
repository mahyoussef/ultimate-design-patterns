import { AnalyzedData } from "./analyzed-data";
import { Data } from "./data";
import { FileInfo } from "./file-info";
import { GeneratedReport } from "./generated-report";

export abstract class CVReportGeneration {
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
