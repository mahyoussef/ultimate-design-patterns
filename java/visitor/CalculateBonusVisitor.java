package visitor;

public class CalculateBonusVisitor implements ScheduleManagementVisitor {
    @Override
    public void visit(DayShiftScheduleManagement dayShiftScheduleManagement) {
        System.out.println("Calculating bonus for day shift...");
    }

    @Override
    public void visit(NightShiftScheduleManagement nightShiftScheduleManagement) {
        System.out.println("Calculating bonus for night shift...");
    }

    @Override
    public void visit(RemoteWorkShiftScheduleManagement remoteWorkShiftScheduleManagement) {
        System.out.println("Calculating bonus for remote work shift...");
    }
}
