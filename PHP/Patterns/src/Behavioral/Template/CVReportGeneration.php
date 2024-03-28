<?php

namespace App\Behavioral\Template;

use App\Behavioral\Template\Data;

abstract class CVReportGeneration
{
    public function generateCVReport(string $cvFilePath)
    {
        $file = $this->readFile($cvFilePath);
        $extractedData = $this->extractData($file);
        $analyzedData = $this->analyzeData($extractedData);
        return $this->generateReportOf($analyzedData);
    }

    abstract protected function extractData($file): Data;

    private function readFile(string $filePath)
    {
        print("reading file from: " . $filePath);
        return null;
    }

    private function analyzeData(Data $data): AnalyzedData | null
    {
        print("analyzing data...");
        return null;
    }

    private function generateReportOf(AnalyzedData $analyzedData): GeneratedReport
    {
        print("generating report...");
        return new GeneratedReport(true);
    }
}
