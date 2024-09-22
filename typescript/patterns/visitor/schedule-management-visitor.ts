interface ScheduleManagementVisitor {
  visit(schedule: DayShiftScheduleManagement, period: string): void;
  visit(schedule: NightShiftScheduleManagement, period: string): void;
  visit(schedule: RemoteShiftScheduleManagement, period: string): void;
}
