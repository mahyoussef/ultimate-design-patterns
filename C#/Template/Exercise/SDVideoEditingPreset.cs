using Template.Exercise.Abstruction;

namespace Template.Exercise;
internal class SDVideoEditingPreset : VideoEditingPreset
{
    protected override void RenderVideo()
    {
        Console.WriteLine("Rendering SD video...");
    }
}
