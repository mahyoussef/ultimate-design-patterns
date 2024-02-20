package adapter.exercise;

public class ReportingService {
    private final ThirdPartyReportingService thirdPartyReportingService;

    public ReportingService(ThirdPartyReportingService thirdPartyReportingService) {
        this.thirdPartyReportingService = thirdPartyReportingService;
    }

    public CSVReport generateReport() {
        return thirdPartyReportingService.generateReport();
    }
}
