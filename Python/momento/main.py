from TextEditor import TextEditor
from History import History

textEditor = TextEditor()
history = History()

textEditor.setContent("Hello, ")
history.saveHistoryState(textEditor.save())

textEditor.setContent("World!")
history.saveHistoryState(textEditor.save())

textEditor.setContent("Welcom to Design Pattern Course!")
history.saveHistoryState(textEditor.save())

textEditor.setContent("This should not be printed out!")
textEditor.restore(history.undo())
textEditor.restore(history.undo())
textEditor.restore(history.redo())
textEditor.restore(history.redo())
print(textEditor.getContent())
