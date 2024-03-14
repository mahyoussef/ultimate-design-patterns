export abstract class VideoPreset {
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
