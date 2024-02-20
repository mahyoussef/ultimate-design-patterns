package templatemethod;

import java.io.File;

public class WordCVReportGeneration extends CVReportGeneration {
    @Override
    public Data extractData(File file) {
        System.out.println("extracting data from word file");
        return null;
    }
}
