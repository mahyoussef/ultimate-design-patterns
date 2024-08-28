<?php

namespace src\Behavioral\Iterator;

class EmployeeSubOrdinateIterator implements EmployeeHierarchyIterator
{
    private EmployeeHierarchyCollection $employeeHierarchyCollection;
    private $currentSubOrdinatePosition = 0;

    /**
     * @param EmployeeHierarchyCollection $employeeHierarchyCollection
     */
    public function __construct(EmployeeHierarchyCollection $employeeHierarchyCollection)
    {
        $this->employeeHierarchyCollection = $employeeHierarchyCollection;
    }

    function hasNext(): bool
    {
        return $this->$currentSubOrdinatePosition < count($this->employeeHierarchyCollection->getEmployees());
    }

    function getNext(): Employee|null
    {
        print_r('Iterating through a graph');

        if (!$this->hasNext()) return null;

        $this->employeeHierarchyCollection->getEmployees()[$this->currentSubOrdinatePosition++];
    }
}