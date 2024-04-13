import 'package:dart_lang/b_behavioral/e_visitor/day_shift_schedule_management.dart';
import 'package:dart_lang/b_behavioral/e_visitor/night_shift.dart';
import 'package:dart_lang/b_behavioral/e_visitor/remote_work_shift.dart';
import 'package:dart_lang/b_behavioral/e_visitor/schedule_management_visitor.dart';

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
