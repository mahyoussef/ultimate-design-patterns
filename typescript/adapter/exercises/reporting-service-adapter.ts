import { JSONReport } from "./JSON-report";

export interface ReportingServiceAdapter {
  generateReport(): JSONReport;
}
