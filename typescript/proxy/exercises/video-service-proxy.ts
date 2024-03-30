import { MediaStreaming } from "./media-streaming.interface";
import { VideoService } from "./video-service";

export class VideoServiceProxy implements MediaStreaming {
  private videoService: VideoService;
  private user: User;

  constructor(user: User) {
    this.videoService = new VideoService();
    this.user = user;
  }

  playVideo(videoId: string): void {
    // Authentication and authorization checks
    if (this.user.hasPermission(videoId)) {
      this.videoService.playVideo(videoId);
      // Log user interaction
      console.log(
        `Logged user interaction: ${this.user.getUsername()} watched video ${videoId}`
      );
    } else {
      console.log(`Access denied for video: ${videoId}`);
    }
  }
}
