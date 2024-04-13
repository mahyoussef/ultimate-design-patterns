import 'package:dart_lang/behavioral/visitor/schedule_management_visitor.dart';

abstract class ScheduleManagement {
  void generateReport();
  void calcOverTime();
  void accept(ScheduleManagementVisitor scheduleManagementVisitor);
}
