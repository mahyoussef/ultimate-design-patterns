namespace Proxy.Exercise;

public sealed class VideoServiceProxy : IMediaStreaming
{
    private readonly VideoService _service;
    private readonly User _user;

    public VideoServiceProxy(User user)
    {
        _service = new VideoService();
        _user = user;
    }

    public void PlayVideo(string videoId)
    {
        if (_user.HasPermission)
        {
            _service.PlayVideo(videoId);
            Console.WriteLine($"Logged user interaction: {_user.Name} watched video {videoId}");
        }
        else
        {
            Console.WriteLine($"Access denied for video: {videoId}");
        }
    }
}
