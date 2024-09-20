class TextEditorState {
  constructor(private content: string) {
    this.content = content;
  }
  getContent(): string {
    return this.content;
  }
  setContent(content: string): void {
    this.content = content;
  }
}

class TextEditor {
  private content: string;
  constructor() {
    this.content = "";
  }

  public setContent(content: string) {
    this.content = content;
  }
  public getContent(): string {
    return this.content;
  }
  save() {
    return new TextEditorState(this.content);
  }
  restore(textEditorState: TextEditorState) {
    this.content = textEditorState.getContent();
  }
}

class TextEditorHistory {
  private prevStates!: TextEditorState[];
  private nextStates!: TextEditorState[];

  constructor() {
    this.prevStates = [];
    this.nextStates = [];
  }
  saveHistoryState(textEditorState: TextEditorState) {
    this.prevStates.push(textEditorState);
  }

  undo(): TextEditorState {
    if (this.prevStates?.length) {
      let state = this.prevStates.pop()!;
      this.nextStates.push(state);
      return state;
    }
    return this.prevStates[0];
  }

  redo(): TextEditorState {
    if (this.nextStates.length > 0) {
      const state = this.nextStates.pop()!;
      this.prevStates.push(state);
      return state;
    }
    return this.nextStates[0];
  }
}

let textEditor = new TextEditor();
let textHistory = new TextEditorHistory();

textEditor.setContent("hello");
textHistory.saveHistoryState(textEditor.save());

textEditor.setContent("world");
textHistory.saveHistoryState(textEditor.save());

textEditor.setContent("Welcome to Design Pattern Course!");
textHistory.saveHistoryState(textEditor.save());

textEditor.restore(textHistory.undo());
textEditor.restore(textHistory.undo());
textEditor.restore(textHistory.redo());

console.log(textEditor.getContent());
