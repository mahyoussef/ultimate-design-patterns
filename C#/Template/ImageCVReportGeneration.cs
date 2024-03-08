using Template.Models;

namespace Template;

/// <summary>
/// Image Scanning for CV Report Generation
/// </summary>
public sealed class ImageCVReportGeneration : CvReportGeneration
{
    /// <summary>
    /// Image Scanning implementation
    /// </summary>
    /// <param name="cvPath"><inheritdoc/></param>
    /// <returns><inheritdoc/></returns>
    protected override Data ExtractData(string cvPath)
    {
        Console.WriteLine("Extracting data from image...");
        return new Data();
    }
}