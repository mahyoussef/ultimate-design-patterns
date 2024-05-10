using Template.Exercise.Abstruction;

namespace Template.Exercise;
internal class FHDVideoEditingPreset : VideoEditingPreset
{
    protected override void RenderVideo()
    {
        Console.WriteLine("Rendering FHD video...");
    }
}
