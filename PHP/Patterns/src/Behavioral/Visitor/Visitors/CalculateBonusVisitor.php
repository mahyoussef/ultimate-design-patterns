<?php

namespace src\Behavioral\Visitor\Visitors;

use src\Behavioral\Visitor\DayShiftScheduleManagement;
use src\Behavioral\Visitor\NightShiftScheduleManagement;
use src\Behavioral\Visitor\RemoteWorkShiftScheduleManagement;

class CalculateBonusVisitor implements ScheduleManagementVisitor
{

    function visitDayShift(DayShiftScheduleManagement $dayShiftScheduleManagement)
    {
        print_r("Calculating Bonus for day Shift");
    }

    function visitNightShift(NightShiftScheduleManagement $nightShiftScheduleManagement)
    {
        print_r('Calculating Bonus for night Shift');
    }

    function visitRemoteWorkShift(RemoteWorkShiftScheduleManagement $remoteWorkShiftScheduleManagement)
    {
        print_r('Calculating Bonus for remote Work Shift');
    }
}