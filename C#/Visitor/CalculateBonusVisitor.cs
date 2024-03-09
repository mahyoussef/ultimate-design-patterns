namespace Visitor;

public sealed class CalculateBonusVisitor : IScheduleManagementVisitor
{
    public void Visit(DayShiftScheduleManagement dayShiftScheduleManagement)
        => Console.WriteLine("Calculating bonus for day shift...");

    public void Visit(NightShiftScheduleManagement nightShiftScheduleManagement)
        => Console.WriteLine("Calculating bonus for night shift...");

    public void Visit(RemoteWorkShiftScheduleManagement remoteWorkShiftScheduleManagement)
        => Console.WriteLine("Calculating bonus for remote work shift...");
}
