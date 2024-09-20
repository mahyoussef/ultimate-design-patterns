interface ScheduleManagement {
  generateReport(): void;
  calculateOverTime(): void;
  accept(visitor: ScheduleManagementVisitor): void;
}
