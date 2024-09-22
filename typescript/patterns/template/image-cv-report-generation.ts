import { CVReportGeneration } from "./cv-report-generation";
import { Data } from "./data";
import { FileInfo } from "./file-info";

export class ImageCVReportGeneration extends CVReportGeneration {
  override extractData(file: FileInfo): Data {
    console.log("extracting data from image");
    return new Data();
  }
}
