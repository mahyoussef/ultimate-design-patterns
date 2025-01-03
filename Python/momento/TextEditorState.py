class TextEditorState:
    def __init__(self, content: str):
        self.__content = content

    def getContent(self) -> str:
        return self.__content

    def setContent(self, content: str):
        self.__content = content
