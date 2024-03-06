using dotnet.TemplateMethod.Models;

namespace dotnet.TemplateMethod;

public class ImageCVReportGeneration : CvReportGeneration
{
    protected override Data ExtractData(Uri cvPath)
    {
        Console.WriteLine("Extracting data from image...");
        
        return new Data();
    }
}