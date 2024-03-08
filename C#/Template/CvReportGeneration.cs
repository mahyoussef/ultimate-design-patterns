using Template.Models;

namespace Template;

/// <summary>
/// The Abstract Class defines a template method that contains a skeleton of
/// some algorithm, composed of calls to (usually) abstract primitive operations.
/// 
/// Concrete subclasses should implement these operations, but leave the
/// template method itself intact.
/// </summary>
public abstract class CvReportGeneration
{
    /// <summary>
    /// The <see cref="GenerateReport(string)"/> method defines the skeleton of an algorithm.
    /// </summary>
    /// <param name="cvPath">Path of File to scan</param>
    /// <returns>The resultant <see cref="GeneratedReport"/></returns>
    public GeneratedReport GenerateReport(string cvPath)
    {
        var fileBuffer = ReadFile(cvPath);
        var data = ExtractData(cvPath);
        var analyzedData = AnalyzeData(data);
        return CreateReport(analyzedData);
    }

    /// <summary>
    /// Data Extraction Definition. To be overridden by subclasses.
    /// </summary>
    /// <param name="cvPath">Path of File to scan</param>
    /// <returns>The <see cref="Data"/> object</returns>
    protected abstract Data ExtractData(string cvPath);

    private static byte[] ReadFile(string cvPath)
    {
        Console.WriteLine("Reading file...");
        return [];
    }

    private static AnalyzedData AnalyzeData(Data data)
    {
        Console.WriteLine("Analyzing data...");
        return new AnalyzedData();
    }

    private static GeneratedReport CreateReport(AnalyzedData analyzedData)
    {
        Console.WriteLine("Generating report...\n");
        return new GeneratedReport(true);
    }
}