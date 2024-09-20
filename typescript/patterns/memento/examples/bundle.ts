class CanvasState {
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

class Canvas {
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

  restore(canvasState: CanvasState | null) {
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

class CanvasHistory {
  private prevStates!: CanvasState[];
  private nextStates!: CanvasState[];

  constructor() {
    this.prevStates = [];
    this.nextStates = [];
  }
  saveHistoryState(textEditorState: CanvasState) {
    this.prevStates.push(textEditorState);
  }

  undo(): CanvasState | null {
    if (this.prevStates?.length) {
      let state = this.prevStates.pop()!;
      this.nextStates.push(state);
      return state;
    }
    return null;
  }

  redo(): CanvasState | null {
    if (this.nextStates.length) {
      const state = this.nextStates.pop()!;
      this.prevStates.push(state);
      return state;
    }
    return null;
  }
}

let canvas = new Canvas();
let canvasHistory = new CanvasHistory();

canvas.setContent("content-1");
canvas.setBorder("border-1");
canvas.setColor("color-1");
canvasHistory.saveHistoryState(canvas.save());

canvas.setContent("content-2");
canvas.setBorder("border-2");
canvas.setColor("color-2");
canvasHistory.saveHistoryState(canvas.save());

canvas.restore(canvasHistory.undo());
canvas.restore(canvasHistory.undo());

canvas.restore(canvasHistory.redo());

console.log(canvas.getContent());
console.log(canvas.getColor());
console.log(canvas.getBorder());
