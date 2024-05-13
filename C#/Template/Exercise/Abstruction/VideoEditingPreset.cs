namespace Template.Exercise.Abstruction;
internal abstract class VideoEditingPreset
{
    internal void ProcessVideo()
    {
        EnhanceVideoQuality();
        ApplyColorCorrection();
        EnhanceAudioQuality();
        ApplyFilters();

        RenderVideo();
    }

    private void EnhanceVideoQuality()
    {
        Console.WriteLine("Enhancing video quality...");
    }

    private void ApplyColorCorrection()
    {
        Console.WriteLine("Applying color correction...");
    }

    private void EnhanceAudioQuality()
    {
        Console.WriteLine("Enhancing audio quality...");
    }

    private void ApplyFilters()
    {
        Console.WriteLine("Applying filters...");
    }

    protected abstract void RenderVideo();
}
