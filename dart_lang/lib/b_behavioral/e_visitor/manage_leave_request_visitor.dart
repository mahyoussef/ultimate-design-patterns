import 'package:dart_lang/b_behavioral/e_visitor/day_shift_schedule_management.dart';
import 'package:dart_lang/b_behavioral/e_visitor/night_shift.dart';
import 'package:dart_lang/b_behavioral/e_visitor/remote_work_shift.dart';
import 'package:dart_lang/b_behavioral/e_visitor/schedule_management_visitor.dart';

class ManageLeaveRequest implements ScheduleManagementVisitor {
  @override
  void visitDayShift(
    DayShiftScheduleManagement dayShiftScheduleManagement,
  ) {
    print('Managing leave request for day shift employees');
  }

  @override
  void visitNightShift(
    NightShiftScheduleManagement nightShiftScheduleManagement,
  ) {
    print('Managing leave request for night shift employees');
  }

  @override
  void visitRemoteWorkShift(
    RemoteWorkShiftScheduleManagement remoteWorkShiftScheduleManagement,
  ) {
    print('Managing leave request for remote shift employees');
  }
}
