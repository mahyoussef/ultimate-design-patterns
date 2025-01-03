from TextEditorState import TextEditorState

class TextEditor:
    def __init__(self):
        self.__content = ""

    def getContent(self) -> str:
        return self.__content

    def setContent(self, content: str):
        self.__content = content

    def save(self) -> TextEditorState:
        return TextEditorState(self.__content)

    def restore(self, state: TextEditorState):
        self.__content = state.getContent()

