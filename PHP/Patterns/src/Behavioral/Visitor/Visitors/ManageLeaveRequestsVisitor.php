<?php

namespace src\Behavioral\Visitor\Visitors;

use src\Behavioral\Visitor\DayShiftScheduleManagement;
use src\Behavioral\Visitor\NightShiftScheduleManagement;
use src\Behavioral\Visitor\RemoteWorkShiftScheduleManagement;

class ManageLeaveRequestsVisitor implements ScheduleManagementVisitor
{

    function visitDayShift(DayShiftScheduleManagement $dayShiftScheduleManagement)
    {
        print_r('Managing leave request for day shift');
    }

    function visitNightShift(NightShiftScheduleManagement $nightShiftScheduleManagement)
    {
        print_r('Managing leave request for night shift');
    }

    function visitRemoteWorkShift(RemoteWorkShiftScheduleManagement $remoteWorkShiftScheduleManagement)
    {
        print_r('Managing leave request for remote work shift');
    }
}