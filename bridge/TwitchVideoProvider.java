package bridge;

public class TwitchVideoProvider extends VideoProvider {

    private final VideoQuality videoQuality;

    public TwitchVideoProvider(VideoQuality videoQuality) {
        this.videoQuality = videoQuality;
    }

    @Override
    public void playback(String videoId) {
        videoQuality.render();
        System.out.println("Playback twitch video...");
    }
}
