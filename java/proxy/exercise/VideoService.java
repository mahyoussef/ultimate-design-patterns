package proxy.exercise;

public class VideoService implements MediaStreaming {
    @Override
    public void playVideo(String videoId) {
        System.out.println("Playing video: " + videoId);
    }
}
