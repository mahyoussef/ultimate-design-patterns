import 'package:Strategy_design/behavioral/visitor/schedule_management_visitor.dart';

abstract class ScheduleManagement {
  void generateReport();
  void calcOverTime();
  void accept(ScheduleManagementVisitor scheduleManagementVisitor);
}
