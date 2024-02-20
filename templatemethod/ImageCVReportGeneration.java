package templatemethod;

import java.io.File;

public class ImageCVReportGeneration extends CVReportGeneration {

    @Override
    public Data extractData(File file) {
        System.out.println("extracting data from an image...");
        return null;
    }
}
