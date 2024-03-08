using Template.Models;

namespace Template;

public sealed class WordCVReportGeneration : CvReportGeneration
{
    /// <summary>
    /// Image Scanning implementation
    /// </summary>
    /// <param name="cvPath"><inheritdoc/></param>
    /// <returns><inheritdoc/></returns>
    protected override Data ExtractData(string cvPath)
    {
        Console.WriteLine("Extracting data from word...");
        return new Data();
    }
}