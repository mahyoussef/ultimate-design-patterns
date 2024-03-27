import 'package:Strategy_design/behavioral/visitor/schedule_magngement.dart';
import 'package:Strategy_design/behavioral/visitor/schedule_management_visitor.dart';

class DayShiftScheduleManagement implements ScheduleManagement {
  @override
  void accept(ScheduleManagementVisitor scheduleManagementVisitor) {
    scheduleManagementVisitor.visitDayShift(this);
  }

  @override
  void calcOverTime() {
    print(' Calculating over time for day shift employees');
  }

  @override
  void generateReport() {
    print('Generating report for day shift employees');
  }
}
