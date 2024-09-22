import { CSVReport } from "./cv-report";
import { ThirdPartyReportingService } from "./third-party-reporting-service";

export class ReportingService {
  private readonly thirdPartyReportingService: ThirdPartyReportingService;

  constructor(thirdPartyReportingService: ThirdPartyReportingService) {
    this.thirdPartyReportingService = thirdPartyReportingService;
  }

  generateReport(): CSVReport {
    return this.thirdPartyReportingService.generateReport();
  }
}
