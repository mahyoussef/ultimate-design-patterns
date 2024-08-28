<?php

namespace src\Behavioral\Visitor;

use src\Behavioral\Visitor\Visitors\ScheduleManagementVisitor;

class RemoteWorkShiftScheduleManagement implements ScheduleManagement
{

    function generateReport()
    {
       print_r("Generate report for remote work shift");
    }

    function calculateOverTime()
    {
        print_r('Calculate overtime for remote work shift');
    }

    function accept (ScheduleManagementVisitor $scheduleManagementVisitor) {
        $scheduleManagementVisitor->visitRemoteWorkShift($this);
    }
}