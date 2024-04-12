import { CanvasState } from "./CanvasState";

export class History {
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
