package visitor;

public interface ScheduleManagement {

    void generateReport();
    void calculateOverTime();
    void accept(ScheduleManagementVisitor scheduleManagementVisitor);
}
