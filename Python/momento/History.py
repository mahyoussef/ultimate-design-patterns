from TextEditorState import TextEditorState

class History:
    def __init__(self):
        self.__prevStates = []
        self.__redoStates = []

    def saveHistoryState(self, textEditorState: TextEditorState):
        self.__prevStates.append(textEditorState)

    def undo(self) -> TextEditorState:
        if len(self.__prevStates) != 0:
            state = self.__prevStates.pop()
            self.__redoStates.append(state)
            return state
        return None
    
    def redo(self) -> TextEditorState:
        if len(self.__redoStates) != 0:
            state = self.__redoStates.pop()
            self.__prevStates.append(state)
            return state
        return None
