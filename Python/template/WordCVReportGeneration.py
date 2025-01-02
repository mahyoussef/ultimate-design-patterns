from CVReportGeneration import CVReportGeneration
from io import FileIO as File
from Data import Data

class WordCVReportGeneration(CVReportGeneration):
    def __init__(self):
        super().__init__()

    def _extract_data(self, file: File) -> Data:
        print(f"Extracting data from a Word file...")
        return None