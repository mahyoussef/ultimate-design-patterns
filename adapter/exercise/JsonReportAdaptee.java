package adapter.exercise;

public class JsonReportAdaptee implements ReportingServiceAdapter {
    private final ThirdPartyReportingService thirdPartyReportingService;

    public JsonReportAdaptee(ThirdPartyReportingService thirdPartyReportingService) {
        this.thirdPartyReportingService = thirdPartyReportingService;
    }

    @Override
    public JSONReport generateReport() {
        return convertDataIntoJson(thirdPartyReportingService.generateReport());
    }

    private JSONReport convertDataIntoJson(CSVReport csvReport) {
        System.out.println("Converting data into json..");
        return new JSONReport();
    }
}
