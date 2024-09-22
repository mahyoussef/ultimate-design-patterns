import { JSONReport } from "./json-report";

export interface ReportingServiceAdapter {
  generateReport(): JSONReport;
}
