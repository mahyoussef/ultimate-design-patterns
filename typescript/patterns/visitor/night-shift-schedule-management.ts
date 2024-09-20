class NightShiftScheduleManagement implements ScheduleManagement {
  generateReport() {
    console.log("Generating report for night shift...");
  }

  calculateOverTime() {
    console.log("Calculating overtime for night shift...");
  }

  accept(visitor: ScheduleManagementVisitor): void {
    visitor.visit(this, "night");
  }
}
