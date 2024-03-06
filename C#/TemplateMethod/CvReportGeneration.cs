using System.Net;
using dotnet.TemplateMethod.Models;

namespace dotnet.TemplateMethod;

public abstract class CvReportGeneration
{
    public GeneratedReport GenerateReport(Uri cvPath)
    {
        var fileBuffer = ReadFile(cvPath);
        var data = ExtractData(cvPath);
        var analyzedData = AnalyzeData(data);
        return GenerateReport(analyzedData);
    }
    protected abstract Data ExtractData(Uri cvPath);
    
    private byte[] ReadFile(Uri cvPath)
    {
        Console.WriteLine("Reading file...");
        
        return Array.Empty<byte>();
    }
    
    private AnalyzedData AnalyzeData(Data data)
    {
        Console.WriteLine("Analyzing data...");
        
        return new AnalyzedData();
    }
    
    private GeneratedReport GenerateReport(AnalyzedData analyzedData)
    {
        Console.WriteLine("Generating report...");
        
        return new GeneratedReport(true);
    }
}