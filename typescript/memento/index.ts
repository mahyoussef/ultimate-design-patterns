import { History } from "./History";
import { TextEditor } from "./TextEditor";

let textEditor = new TextEditor();
let history = new History();

textEditor.setContent("hello");
history.saveHistoryState(textEditor.save());

textEditor.setContent("world");
history.saveHistoryState(textEditor.save());

textEditor.setContent("Welcome to Design Pattern Course!");
history.saveHistoryState(textEditor.save());

textEditor.restore(history.undo());
textEditor.restore(history.undo());
textEditor.restore(history.redo());

console.log(textEditor.getContent());
