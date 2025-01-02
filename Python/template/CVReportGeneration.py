from io import FileIO as File
from Data import Data
from AnalyzeData import AnalyzeData
from GeneratedReport import GeneratedReport

class CVReportGeneration:
    
    def generate_cv_report(self, file_path: str) -> GeneratedReport:
        file = self.__read_file(file_path)
        data = self._extract_data(file)
        analyze_data = self.__analyze_data(data)
        report = self.__generate_report_of(analyze_data)
        return report
    
    def _extract_data(self, file: File) -> Data:
        pass
    
    def __read_file(self, file_path: str) -> File:
        print(f"Reading file from {file_path}")
        return None
    
    def __analyze_data(self, data: Data) -> AnalyzeData:
        print(f"Analyzing data...")
        return None
    
    def __generate_report_of(self, analyze_data: AnalyzeData) -> GeneratedReport:
        print(f"Generating report of ...")
        return GeneratedReport(True)
