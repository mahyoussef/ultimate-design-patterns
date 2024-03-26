import 'package:Strategy_design/behavioral/visitor/day_shift_schedule_management.dart';
import 'package:Strategy_design/behavioral/visitor/night_shift.dart';
import 'package:Strategy_design/behavioral/visitor/remote_work_shift.dart';
import 'package:Strategy_design/behavioral/visitor/schedule_management_visitor.dart';

class CalcBounse implements ScheduleManagementVisitor {
  @override
  void visitDayShift(DayShiftScheduleManagement dayShiftScheduleManagement) {
    print('Calculating bounse for day shift employees');
  }

  @override
  void visitNightShift(
      NightShiftScheduleManagement nightShiftScheduleManagement) {
    print('Calculating bounse for night shift employees');
  }

  @override
  void visitRemoteWorkShift(
      RemoteWorkShiftScheduleManagement remoteWorkShiftScheduleManagement) {
    print('Calculating bounse for remote shift employees');
  }
}
