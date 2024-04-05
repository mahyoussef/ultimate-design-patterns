class Customer:
    def __init__(self, name: str, email: str):
        self.name = name
        self.email = email

    def get_name(self) -> str:
        return self.name
    
    def get_email(self) -> str:
        return self.email

    def __str__(self):
        return f"Customer name: {self.name}, Email: {self.email}"