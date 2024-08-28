<?php

use src\Behavioral\Visitor\DayShiftScheduleManagement;
use src\Behavioral\Visitor\NightShiftScheduleManagement;
use src\Behavioral\Visitor\Visitors\CalculateBonusVisitor;
use src\Behavioral\Visitor\Visitors\ManageLeaveRequestsVisitor;

$DS = DIRECTORY_SEPARATOR;
require_once __DIR__ . $DS . '..' . $DS . '..' . $DS . '..' . $DS . 'vendor' . $DS . 'autoload.php';



$scheduleManagement = new DayShiftScheduleManagement();
$scheduleManagement->accept(new ManageLeaveRequestsVisitor());

print_r("\n");

$scheduleManagement = new NightShiftScheduleManagement();
$scheduleManagement->accept(new CalculateBonusVisitor());