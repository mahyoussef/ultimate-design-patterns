abstract class VideoPreset {
  applyPreset() {
    this.enhanceVideoQuality();
    this.applyColorCorrection();
    this.enhanceAudioQuality();
    this.applyFilters();
    this.renderVideo();
  }

  private applyFilters() {}

  protected abstract applyColorCorrection(): void;

  private enhanceVideoQuality() {}

  private enhanceAudioQuality() {}

  protected abstract renderVideo(): void;
}

class CustomVideoPreset extends VideoPreset {
  protected override applyColorCorrection() {
    console.log("Apply my favorite color correction...");
  }

  protected override renderVideo() {
    console.log("render video for FHD...");
  }
}

// example usage
const customVideoPreset = new CustomVideoPreset();
customVideoPreset.applyPreset();
