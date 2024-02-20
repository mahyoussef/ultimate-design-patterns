package visitor;

public interface ScheduleManagementVisitor {
    void visit(DayShiftScheduleManagement dayShiftScheduleManagement);
    void visit(NightShiftScheduleManagement nightShiftScheduleManagement);
    void visit(RemoteWorkShiftScheduleManagement remoteWorkShiftScheduleManagement);
}
