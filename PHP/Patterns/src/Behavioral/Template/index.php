<?php

use App\Behavioral\Template\PdfCVReportGeneration;
use App\Behavioral\Template\WordCVReportGeneration;
use App\Behavioral\Template\ImageCVReportGeneration;

$DS = DIRECTORY_SEPARATOR;
require_once __DIR__ . $DS . '..' . $DS . '..' . $DS . '..' . $DS . 'vendor' . $DS . 'autoload.php';



$pdf = new PdfCVReportGeneration();
$pdfGeneratedReport = $pdf->generateCVReport('file.pdf');
echo $pdfGeneratedReport->isPassed();

$word = new WordCVReportGeneration();
$wordGeneratedReport = $word->generateCVReport('file.doc');
echo $wordGeneratedReport->isPassed();


$image = new ImageCVReportGeneration();
$imageGeneratedReport = $image->generateCVReport('file.png');
echo $imageGeneratedReport->isPassed();