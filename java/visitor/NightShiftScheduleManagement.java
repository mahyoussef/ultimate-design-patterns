package visitor;

public class NightShiftScheduleManagement implements ScheduleManagement {
    @Override
    public void generateReport() {
        System.out.println("Generating report for night shift...");
    }

    @Override
    public void calculateOverTime() {
        System.out.println("Calculating over time for night shift..");
    }

    @Override
    public void accept(ScheduleManagementVisitor scheduleManagementVisitor) {
        scheduleManagementVisitor.visit(this);
    }

}
