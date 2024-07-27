<?php

namespace src\Behavioral\Iterator;

interface EmployeeHierarchyIterator
{
    function hasNext() : bool;
    function getNext() : Employee|null;
}