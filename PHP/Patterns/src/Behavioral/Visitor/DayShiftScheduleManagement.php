<?php

namespace src\Behavioral\Visitor;

use src\Behavioral\Visitor\Visitors\ScheduleManagementVisitor;

class DayShiftScheduleManagement implements ScheduleManagement
{
    function generateReport()
    {
        print_r('Generate report for day shift');
    }

    function calculateOverTime()
    {
        print_r('Calculate overtime for day shift');
    }

    function accept (ScheduleManagementVisitor $scheduleManagementVisitor) {
        $scheduleManagementVisitor->visitDayShift($this);
    }
}