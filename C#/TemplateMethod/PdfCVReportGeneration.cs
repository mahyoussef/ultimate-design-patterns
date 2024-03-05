using dotnet.TemplateMethod.Models;

namespace dotnet.TemplateMethod;

public class PdfCVReportGeneration : CvReportGeneration
{
    protected override Data ExtractData(Uri cvPath)
    {
        Console.WriteLine("Extracting data from pdf...");
        
        return new Data();
    }
}