import { JSONReport } from "./json-report";
import { CSVReport } from "./cv-report";
import { ReportingServiceAdapter } from "./reporting-service-adapter";
import { ThirdPartyReportingService } from "./third-party-reporting-service";

class JsonReportAdaptee implements ReportingServiceAdapter {
  private readonly thirdPartyReportingService: ThirdPartyReportingService;

  constructor(thirdPartyReportingService: ThirdPartyReportingService) {
    this.thirdPartyReportingService = thirdPartyReportingService;
  }

  generateReport(): JSONReport {
    return this.convertDataIntoJson(
      this.thirdPartyReportingService.generateReport()
    );
  }

  private convertDataIntoJson(csvReport: CSVReport): JSONReport {
    console.log("Converting data into JSON...");
    return new JSONReport();
  }
}
