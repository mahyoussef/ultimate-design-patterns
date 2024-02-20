package visitor;

public class RemoteWorkShiftScheduleManagement implements ScheduleManagement {
    @Override
    public void generateReport() {
        System.out.println("Generating report for remote work shift...");
    }

    @Override
    public void calculateOverTime() {
        System.out.println("Calculating over time for remote work shift..");
    }

    @Override
    public void accept(ScheduleManagementVisitor scheduleManagementVisitor) {
        scheduleManagementVisitor.visit(this);
    }

}
