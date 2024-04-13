import { CanvasState } from "./CanvasState";

export class Canvas {
  private content: string;
  private color: string;
  private border: string;
  constructor() {
    this.content = "";
    this.color = "";
    this.border = "";
  }

  public save(): CanvasState {
    return new CanvasState(this.content, this.color, this.border);
  }

  restore(canvasState: CanvasState) {
    if (!canvasState) {
      this.content = "";
      this.color = "";
      this.border = "";
    } else {
      this.content = canvasState.getContent();
      this.color = canvasState.getColor();
      this.border = canvasState.getBorder();
    }
  }

  getContent(): string {
    return this.content;
  }

  getColor(): string {
    return this.color;
  }

  getBorder(): string {
    return this.border;
  }

  setContent(content: string) {
    this.content = content;
  }

  setColor(color: string) {
    this.color = color;
  }

  setBorder(border: string) {
    this.border = border;
  }
}
