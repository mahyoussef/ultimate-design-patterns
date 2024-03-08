using Template.Models;

namespace Template;

public sealed class PdfCVReportGeneration : CvReportGeneration
{
    /// <summary>
    /// PDF Scanning implementation
    /// </summary>
    /// <param name="cvPath"><inheritdoc/></param>
    /// <returns><inheritdoc/></returns>
    protected override Data ExtractData(string cvPath)
    {
        Console.WriteLine("Extracting data from pdf...");
        return new Data();
    }
}