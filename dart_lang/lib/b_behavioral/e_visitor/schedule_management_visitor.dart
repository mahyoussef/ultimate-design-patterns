import 'package:dart_lang/b_behavioral/e_visitor/day_shift_schedule_management.dart';
import 'package:dart_lang/b_behavioral/e_visitor/night_shift.dart';
import 'package:dart_lang/b_behavioral/e_visitor/remote_work_shift.dart';

abstract class ScheduleManagementVisitor {
  void visitDayShift(DayShiftScheduleManagement dayShiftScheduleManagement);
  void visitNightShift(
      NightShiftScheduleManagement nightShiftScheduleManagement);
  void visitRemoteWorkShift(
      RemoteWorkShiftScheduleManagement remoteWorkShiftScheduleManagement);
}
