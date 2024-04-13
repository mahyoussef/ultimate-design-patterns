import 'package:dart_lang/b_behavioral/e_visitor/schedule_magngement.dart';
import 'package:dart_lang/b_behavioral/e_visitor/schedule_management_visitor.dart';

class RemoteWorkShiftScheduleManagement implements ScheduleManagement {
  @override
  void accept(ScheduleManagementVisitor scheduleManagementVisitor) {
    scheduleManagementVisitor.visitRemoteWorkShift(this);
  }

  @override
  void calcOverTime() {
    print(' Calculating over time for remote shift employees');
  }

  @override
  void generateReport() {
    print('Generating report for remote shift employees');
  }
}
