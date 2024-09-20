class CalculateBonusVisitor implements ScheduleManagementVisitor {
  visit(schedule: ScheduleManagement, period: string): void {
    console.log(`Calculating bonus for ${period} shift...`);
  }
}
