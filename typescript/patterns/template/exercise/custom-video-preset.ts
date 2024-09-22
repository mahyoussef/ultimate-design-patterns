import { VideoPreset } from "./video-preset";

export class CustomVideoPreset extends VideoPreset {
  protected override applyColorCorrection() {
    console.log("Apply my favorite color correction...");
  }

  protected override renderVideo() {
    console.log("render video for FHD...");
  }
}
