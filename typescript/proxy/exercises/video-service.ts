import { MediaStreaming } from "./media-streaming.interface";

export class VideoService implements MediaStreaming {
  playVideo(videoId: string): void {
    console.log(`Playing video: ${videoId}`);
  }
}
