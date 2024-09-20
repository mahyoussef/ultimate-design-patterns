class ManageLeaveRequestVisitor implements ScheduleManagementVisitor {
  visit(schedule: ScheduleManagement, period: string): void {
    console.log(`Managing leave request for ${period} shift...`);
  }
}
