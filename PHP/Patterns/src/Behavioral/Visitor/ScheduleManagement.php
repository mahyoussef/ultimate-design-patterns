<?php

namespace src\Behavioral\Visitor;

use src\Behavioral\Visitor\Visitors\ScheduleManagementVisitor;

interface ScheduleManagement
{
    function generateReport();
    function calculateOverTime();
    function accept(ScheduleManagementVisitor $scheduleManagementVisitor);
}