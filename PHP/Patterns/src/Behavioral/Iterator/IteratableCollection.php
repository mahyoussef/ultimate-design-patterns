<?php

namespace src\Behavioral\Iterator;

interface IteratableCollection
{
    function createEmployeeDirectReportIterator(): EmployeeHierarchyIterator;
    function createEmployeeCoWorkerIterator(): EmployeeHierarchyIterator;
    function createEmployeeSubordinateIterator(): EmployeeHierarchyIterator;
}