import 'package:Strategy_design/behavioral/visitor/day_shift_schedule_management.dart';
import 'package:Strategy_design/behavioral/visitor/night_shift.dart';
import 'package:Strategy_design/behavioral/visitor/remote_work_shift.dart';

abstract class ScheduleManagementVisitor {
  void visitDayShift(DayShiftScheduleManagement dayShiftScheduleManagement);
  void visitNightShift(
      NightShiftScheduleManagement nightShiftScheduleManagement);
  void visitRemoteWorkShift(
      RemoteWorkShiftScheduleManagement remoteWorkShiftScheduleManagement);
}
