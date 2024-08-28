<?php

namespace src\Behavioral\Iterator;

class EmployeeHierarchyCollection implements IteratableCollection
{
    private array $employees;
    private $employeeId;

    /**
     * @param array $employees
     * @param $employeeId
     */
    public function __construct($employeeId)
    {
        $this->employees = [
            new Employee(123, "Ahmed"),
            new Employee(456, "Ali"),
            new Employee(789, "Aya"),
            new Employee(234, "Nada"),
            new Employee(678, "Mohammed"),
        ];

        $this->employeeId = $employeeId;
    }

    public function getEmployees(): array
    {
        return $this->employees;
    }


    function createEmployeeDirectReportIterator(): EmployeeHierarchyIterator
    {
        return new EmployeeDirectReportIterator($this);
    }

    function createEmployeeCoWorkerIterator(): EmployeeHierarchyIterator
    {
        return new EmployeeCoWorkerIterator($this);
    }

    function createEmployeeSubordinateIterator(): EmployeeHierarchyIterator
    {
        return new EmployeeSubOrdinateIterator($this);
    }
}