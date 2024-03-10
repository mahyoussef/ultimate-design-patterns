using System.Runtime.InteropServices;

using Visitor;

// The client code can run visitor operations over any set of elements
// without figuring out their concrete classes. The accept operation
// directs a call to the appropriate operation in the visitor object.

List<IScheduleManagement> schedules = 
    [
        new DayShiftScheduleManagement(),
        new RemoteWorkShiftScheduleManagement(),
        new NightShiftScheduleManagement(),
    ];

// The client code works with all visitors via the base Visitor interface
IScheduleManagementVisitor visitor = new CalculateBonusVisitor();
RunVisitor(schedules, visitor);

Console.WriteLine();

// It allows the same client code to work with different types of visitors
IScheduleManagementVisitor visitor2 = new ManageLeaveRequestsVisitor();
RunVisitor(schedules, visitor2);

static void RunVisitor(List<IScheduleManagement> schedules, IScheduleManagementVisitor visitor)
{
    foreach (var schedule in CollectionsMarshal.AsSpan(schedules))
    {
        schedule.Accept(visitor);
    }
}