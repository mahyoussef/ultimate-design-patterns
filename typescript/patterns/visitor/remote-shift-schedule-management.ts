class RemoteShiftScheduleManagement implements ScheduleManagement {
  generateReport() {
    console.log("Generating report for remote shift...");
  }

  calculateOverTime() {
    console.log("Calculating overtime for remote shift...");
  }

  accept(visitor: ScheduleManagementVisitor): void {
    visitor.visit(this, "remote");
  }
}
