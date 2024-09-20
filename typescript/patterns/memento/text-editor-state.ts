export class TextEditorState {
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
