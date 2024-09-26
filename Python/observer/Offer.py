class Offer:
    def __init__(self, message:str):
        self.msg = message

    def get_name(self) -> str:
        return self.msg