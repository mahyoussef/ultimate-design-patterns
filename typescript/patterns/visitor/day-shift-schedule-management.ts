class DayShiftScheduleManagement implements ScheduleManagement {
  generateReport() {
    console.log("Generating report for day shift...");
  }

  calculateOverTime() {
    console.log("Calculating overtime for day shift...");
  }

  accept(visitor: ScheduleManagementVisitor): void {
    visitor.visit(this, "day");
  }
}
