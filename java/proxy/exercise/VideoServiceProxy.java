package proxy.exercise;

public class VideoServiceProxy implements MediaStreaming {

    private VideoService videoService;
    private User user;

    public VideoServiceProxy(User user) {
        this.videoService = new VideoService();
        this.user = user;
    }

    @Override
    public void playVideo(String videoId) {
        // Authentication and authorization checks
        if (user.hasPermission(videoId)) {
            videoService.playVideo(videoId);
            // Log user interaction
            System.out.println("Logged user interaction: " + user.getUsername() + " watched video " + videoId);
        } else {
            System.out.println("Access denied for video: " + videoId);
        }
    }
}
