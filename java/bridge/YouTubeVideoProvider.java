package bridge;

public class YouTubeVideoProvider extends VideoProvider {

    private final VideoQuality videoQuality;

    public YouTubeVideoProvider(VideoQuality videoQuality) {
        this.videoQuality = videoQuality;
    }

    @Override
    public void playback(String videoId) {
        videoQuality.render();
        System.out.println("Playback youtube video...");
    }
}
