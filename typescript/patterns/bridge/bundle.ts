abstract class VideoProvider {
  abstract playback(videoId: string): void;
}

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

// ############################

interface VideoQuality {
  render(): void;
}

class FHDVideoQuality implements VideoQuality {
  render(): void {
    console.log("Rendering FHD video quality...");
  }
}

class HDVideoQuality implements VideoQuality {
  render(): void {
    console.log("Rendering HD video quality...");
  }
}

class SDVideoQuality implements VideoQuality {
  render(): void {
    console.log("Rendering SD video quality...");
  }
}

// Example usage

const hdQuality = new HDVideoQuality();
const youtubeProvider = new YoutubeVideoProvider(hdQuality);
youtubeProvider.playback("1234");

const twitchProvider = new TwitchProvider(hdQuality);
twitchProvider.playback("1234");
