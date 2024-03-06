using dotnet.TemplateMethod.Models;

namespace dotnet.TemplateMethod;

public class WordCVReportGeneration : CvReportGeneration
{
    protected override Data ExtractData(Uri cvPath)
    {
        Console.WriteLine("Extracting data from word...");
        
        return new Data();
    }
}