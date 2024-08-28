<?php

namespace src\Behavioral\Visitor;

use src\Behavioral\Visitor\Visitors\ScheduleManagementVisitor;

class NightShiftScheduleManagement implements ScheduleManagement
{

    function generateReport()
    {
       print_r("Generate report for night shift");
    }

    function calculateOverTime()
    {
        print_r('Calculate overtime for night shift');
    }

    function accept (ScheduleManagementVisitor $scheduleManagementVisitor) {
        $scheduleManagementVisitor->visitNightShift($this);
    }
}