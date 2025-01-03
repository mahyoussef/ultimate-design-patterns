class GeneratedReport:
    def __init__(self, is_passed: bool):
        self.__is_passed = is_passed
        
    def is_passed(self) -> bool:
        return self.__is_passed