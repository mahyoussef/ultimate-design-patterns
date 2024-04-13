import 'package:dart_lang/behavioral/visitor/schedule_magngement.dart';
import 'package:dart_lang/behavioral/visitor/schedule_management_visitor.dart';

class NightShiftScheduleManagement implements ScheduleManagement {
  @override
  void accept(ScheduleManagementVisitor scheduleManagementVisitor) {
    scheduleManagementVisitor.visitNightShift(this);
  }

  @override
  void calcOverTime() {
    print(' Calculating over time for night shift employees');
  }

  @override
  void generateReport() {
    print('Generating report for night shift employees');
  }
}
