from Python.observer.Subscriber import Subscriber


class JobFinder(Subscriber):
    def __init__(self, name:str):
        self.name = name

    def get_name(self) -> str:
        return self.name

    def notify(self, message:str)-> None:
        print(f"{self.name} is receiving a notification about job finding: {message}")
