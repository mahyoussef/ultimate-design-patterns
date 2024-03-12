namespace Proxy.Exercise;

public sealed class VideoService : IMediaStreaming
{
    public void PlayVideo(string videoId)
        => Console.WriteLine($"Playing Video with ID: {videoId}");
}
