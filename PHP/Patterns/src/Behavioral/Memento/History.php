<?php

namespace Behavioral\Memento;

class History
{
    private array $prevStates;
 

    public function __construct()
    {
        $this->prevStates = [];
    }

    public function saveHistoryState(TextEditorState $state): void
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
