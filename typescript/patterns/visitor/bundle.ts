// Interfaces
interface ScheduleManagementVisitor {
  visit(schedule: DayShiftScheduleManagement, period: string): void;
  visit(schedule: NightShiftScheduleManagement, period: string): void;
  visit(schedule: RemoteShiftScheduleManagement, period: string): void;
}

interface ScheduleManagement {
  generateReport(): void;
  calculateOverTime(): void;
  accept(visitor: ScheduleManagementVisitor): void;
}

// Concrete Classes
class ManageLeaveRequestVisitor implements ScheduleManagementVisitor {
  visit(schedule: ScheduleManagement, period: string): void {
    console.log(`Managing leave request for ${period} shift...`);
  }
}

class CalculateBonusVisitor implements ScheduleManagementVisitor {
  visit(schedule: ScheduleManagement, period: string): void {
    console.log(`Calculating bonus for ${period} shift...`);
  }
}

// Shift classes
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

// example usage
const leaveRequestVisitor = new ManageLeaveRequestVisitor();
const calculateBonusVisitor = new CalculateBonusVisitor();

const scheduleManagementList = [
  new DayShiftScheduleManagement(),
  new NightShiftScheduleManagement(),
  new RemoteShiftScheduleManagement(),
];
scheduleManagementList.forEach((scheduleManagement) => {
  scheduleManagement.generateReport();
  scheduleManagement.calculateOverTime();
  scheduleManagement.accept(leaveRequestVisitor);
  scheduleManagement.accept(calculateBonusVisitor);
});
