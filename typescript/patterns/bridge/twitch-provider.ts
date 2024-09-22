class TwitchProvider extends VideoProvider {
  private videoQuality: VideoQuality;

  constructor(videoQuality: VideoQuality) {
    super();
    this.videoQuality = videoQuality;
  }

  override playback(videoId: string) {
    this.videoQuality.render();
    console.log("Playback twitch video...");
  }
}
