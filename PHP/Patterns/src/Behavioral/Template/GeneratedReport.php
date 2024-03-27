<?php

namespace App\Behavioral\Template;

class GeneratedReport
{
    private bool $isPassed;

    public function __construct(bool $isPassed)
    {
        $this->isPassed = $isPassed;
    }

    public function isPassed(): bool
    {
        return $this->isPassed;
    }
}
