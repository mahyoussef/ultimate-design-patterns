import { TextEditorState } from "./TextEditorState";

export class TextEditor {
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
  restore(textEditorState: TextEditorState | null) {
    if (!textEditorState) this.content = "";
    else this.content = textEditorState.getContent();
  }
}
