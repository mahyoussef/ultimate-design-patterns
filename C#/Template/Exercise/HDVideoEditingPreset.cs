using Template.Exercise.Abstruction;

namespace Template.Exercise;
internal class HDVideoEditingPreset : VideoEditingPreset
{
    protected override void RenderVideo()
    {
        Console.WriteLine("Rendering HD video...");
    }
}
