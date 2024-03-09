namespace Visitor;

/// <summary>
/// The <see cref="IScheduleManagement"/> interface declares an `Accept` method that should take the
/// base <see cref="IScheduleManagementVisitor"/> interface as an argument.
/// </summary>
public interface IScheduleManagement
{
    void GenerateReport();
    void CalculateOverTime();
    void Accept(IScheduleManagementVisitor scheduleManagementVisitor);
}
