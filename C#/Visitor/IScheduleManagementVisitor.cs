namespace Visitor;

/// <summary>
/// The <see cref="IScheduleManagementVisitor"/> interface declares a set of visiting methods that
/// correspond to ScheduleManagement classes. The signature of a visiting method allows the
/// visitor to identify the exact class of the ScheduleManagement that it's dealing with.
/// </summary>
public interface IScheduleManagementVisitor
{
    void Visit(DayShiftScheduleManagement dayShiftScheduleManagement);
    void Visit(NightShiftScheduleManagement nightShiftScheduleManagement);
    void Visit(RemoteWorkShiftScheduleManagement remoteWorkShiftScheduleManagement);
}
