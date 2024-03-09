namespace Visitor;

public sealed class RemoteWorkShiftScheduleManagement : IScheduleManagement
{
    public void CalculateOverTime()
        => Console.WriteLine("Calculating over time for remote work shift..");

    public void GenerateReport()
        => Console.WriteLine("Generating report for remote work shift...");

    public void Accept(IScheduleManagementVisitor scheduleManagementVisitor)
        => scheduleManagementVisitor.Visit(this);
}
