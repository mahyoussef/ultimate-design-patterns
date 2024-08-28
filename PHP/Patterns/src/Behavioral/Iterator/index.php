<?php

use src\Behavioral\Iterator\EmployeeHierarchyCollection;

$DS = DIRECTORY_SEPARATOR;
require_once __DIR__ . $DS . '..' . $DS . '..' . $DS . '..' . $DS . 'vendor' . $DS . 'autoload.php';


$employeeHirearcheyCollection = new EmployeeHierarchyCollection(123);

$iterator = $employeeHirearcheyCollection->createEmployeeDirectReportIterator();

while ($iterator->hasNext()) {
    print_r($iterator->getNext()->getName() . "\n");
}