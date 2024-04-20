import 'package:dart_lang/b_behavioral/e_visitor/schedule_magngement.dart';
import 'package:dart_lang/b_behavioral/e_visitor/schedule_management_visitor.dart';

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
