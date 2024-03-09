namespace Visitor;

public sealed class ManageLeaveRequestsVisitor : IScheduleManagementVisitor
{
    public void Visit(DayShiftScheduleManagement dayShiftScheduleManagement)
        => Console.WriteLine("Managing leave requests for day shift.");

    public void Visit(NightShiftScheduleManagement nightShiftScheduleManagement)
        => Console.WriteLine("Managing leave requests for night shift.");

    public void Visit(RemoteWorkShiftScheduleManagement remoteWorkShiftScheduleManagement)
        => Console.WriteLine("Managing leave requests for remote work shift.");
}
