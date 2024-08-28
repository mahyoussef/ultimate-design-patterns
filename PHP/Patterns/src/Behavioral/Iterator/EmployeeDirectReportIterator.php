<?php

namespace src\Behavioral\Iterator;

class EmployeeDirectReportIterator implements EmployeeHierarchyIterator
{
    private EmployeeHierarchyCollection $employeeHierarchyCollection;
    private $currentDirectReportPosition = 0;

    /**
     * @param EmployeeHierarchyCollection $employeeHierarchyCollection
     */
    public function __construct(EmployeeHierarchyCollection $employeeHierarchyCollection)
    {
        $this->employeeHierarchyCollection = $employeeHierarchyCollection;
    }


    function hasNext(): bool
    {
        return $this->currentDirectReportPosition < count($this->employeeHierarchyCollection->getEmployees());
    }

    function getNext(): Employee|null
    {
        print_r("Iterating through a graph \n");

        if (!$this->hasNext()) return null;

        return $this->employeeHierarchyCollection->getEmployees()[$this->currentDirectReportPosition++];
    }
}