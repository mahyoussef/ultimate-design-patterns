import { TextEditorState } from "./TextEditorState";

export class History {
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
