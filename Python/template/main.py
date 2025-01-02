from PdfCVReportGeneration import PdfCVReportGeneration
from WordCVReportGeneration import WordCVReportGeneration
from ImageCVReportGeneration import ImageCVReportGeneration

pdf_cv_report_generation = PdfCVReportGeneration()
pdf_generated_report = pdf_cv_report_generation.generate_cv_report("pdf_file.pdf")
print(pdf_generated_report.is_passed())

word_cv_report_generation = WordCVReportGeneration()
word_generated_report = word_cv_report_generation.generate_cv_report("word_file.docx")
print(word_generated_report.is_passed())

image_cv_report_generation = ImageCVReportGeneration()
image_generated_report = image_cv_report_generation.generate_cv_report("image_file.jpg")
print(image_generated_report.is_passed())
