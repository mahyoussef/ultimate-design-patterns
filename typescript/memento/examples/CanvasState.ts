export class CanvasState {
  constructor(
    private content: string,
    private color: string,
    private border: string
  ) {
    this.content = content;
    this.color = color;
    this.border = border;
  }

  getContent(): string {
    return this.content;
  }

  setContent(content: string) {
    this.content = content;
  }

  getColor(): string {
    return this.color;
  }

  setColor(color: string) {
    this.color = color;
  }

  getBorder(): string {
    return this.border;
  }

  setBorder(border: string) {
    this.border = border;
  }
}
