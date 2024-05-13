using Template.Exercise;
using Template.Exercise.Abstruction;

#region CvReportGeneration EX.
//// Generating a PDF report
//CvReportGeneration cvReportGeneration = new PdfCVReportGeneration();
//cvReportGeneration.GenerateReport("path/to/cv.pdf");


//// Generating a Image report
//cvReportGeneration = new ImageCVReportGeneration();
//cvReportGeneration.GenerateReport("path/to/cv.png");

//// Generating a Word report
//cvReportGeneration = new WordCVReportGeneration();
//cvReportGeneration.GenerateReport("path/to/cv.docx");
#endregion

#region VideoEditingPreset EX.
VideoEditingPreset SD_videoEditingPreset = new SDVideoEditingPreset();
SD_videoEditingPreset.ProcessVideo();

Console.WriteLine("--------------------------------------------------");

VideoEditingPreset HD_videoEditingPreset = new HDVideoEditingPreset();
HD_videoEditingPreset.ProcessVideo();

Console.WriteLine("--------------------------------------------------");

VideoEditingPreset FHD_videoEditingPreset = new FHDVideoEditingPreset();
FHD_videoEditingPreset.ProcessVideo();
#endregion