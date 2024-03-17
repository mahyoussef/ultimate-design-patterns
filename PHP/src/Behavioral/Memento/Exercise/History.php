<?php

namespace App\Behavioral\Memento\Exercise;

class History
{
    private array $prevStates;

    public function __construct()
    {
        $this->prevStates = [];
    }

    public function saveHistoryState(CanvasState $state): void
    {
        $this->prevStates[] = $state;
    }

    public function undo()
    {
        if (count($this->prevStates) > 0) {
            return array_pop($this->prevStates);
        }
        return null;
    }
}
