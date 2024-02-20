package visitor;

public class ManageLeaveRequestsVisitor implements ScheduleManagementVisitor {
    @Override
    public void visit(DayShiftScheduleManagement dayShiftScheduleManagement) {
        System.out.println("Managing leave requests for day shift.");
    }

    @Override
    public void visit(NightShiftScheduleManagement nightShiftScheduleManagement) {
        System.out.println("Managing leave requests for night shift.");
    }

    @Override
    public void visit(RemoteWorkShiftScheduleManagement remoteWorkShiftScheduleManagement) {
        System.out.println("Managing leave requests for remote work shift.");
    }
}
