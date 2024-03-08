namespace Template.Models;

public sealed class GeneratedReport(bool isPassed)
{
    public bool IsPassed { get; } = isPassed;
}