import 'package:dart_lang/b_behavioral/e_visitor/schedule_management_visitor.dart';

abstract class ScheduleManagement {
  void generateReport();
  void calcOverTime();
  void accept(ScheduleManagementVisitor scheduleManagementVisitor);
}
