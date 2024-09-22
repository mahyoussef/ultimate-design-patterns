class YoutubeVideoProvider extends VideoProvider {
  private videoQuality: VideoQuality;

  constructor(videoQuality: VideoQuality) {
    super();
    this.videoQuality = videoQuality;
  }
  override playback(videoId: string) {
    this.videoQuality.render();
    console.log("Playback youtube video...");
  }
}
