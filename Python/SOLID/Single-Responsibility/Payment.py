class Payment:
    def __init__(self, type : str) -> None:
        self.type = type

    def get_type(self) -> str:
        return self.type
    
    def __str__(self):
        return f"Payment type: {self.type}"