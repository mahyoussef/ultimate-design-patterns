<?php
namespace App\Behavioral\Template;

class WordCVReportGeneration extends CVReportGeneration
{
    protected function extractData($file): Data
    {
        print("extracting data from image...");
        return new Data();

    }
}
