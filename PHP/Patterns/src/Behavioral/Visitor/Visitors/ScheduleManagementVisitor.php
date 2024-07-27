<?php

namespace src\Behavioral\Visitor\Visitors;

use src\Behavioral\Visitor\DayShiftScheduleManagement;
use src\Behavioral\Visitor\NightShiftScheduleManagement;
use src\Behavioral\Visitor\RemoteWorkShiftScheduleManagement;

interface ScheduleManagementVisitor
{
    function visitDayShift(DayShiftScheduleManagement $dayShiftScheduleManagement);
    function visitNightShift(NightShiftScheduleManagement $nightShiftScheduleManagement);
    function visitRemoteWorkShift(RemoteWorkShiftScheduleManagement $remoteWorkShiftScheduleManagement);
}