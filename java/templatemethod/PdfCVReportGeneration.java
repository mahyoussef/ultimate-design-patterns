package templatemethod;

import java.io.File;

public class PdfCVReportGeneration extends CVReportGeneration {

    @Override
    public Data extractData(File file) {
        System.out.println("extracting data from PDF");
        return null;
    }
}
