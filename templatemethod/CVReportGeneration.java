package templatemethod;

import java.io.File;

public abstract class CVReportGeneration {

    public GeneratedReport generateCVReport(String cvFilePath) {
        var file = readFile(cvFilePath);
        var extractedData = extractData(file);
        var analyzedData = analyzeData(extractedData);
        return generateReportOf(analyzedData);
    }

    protected abstract Data extractData(File file);

    private File readFile(String filePath) {
        System.out.println("reading file from: " + filePath);
        return null;
    }

    private AnalyzedData analyzeData(Data data) {
        System.out.println("analyzing data...");
        return null;
    }

    private GeneratedReport generateReportOf(AnalyzedData analyzedData) {
        System.out.println("generating report...");
        return new GeneratedReport(true);
    }
}
