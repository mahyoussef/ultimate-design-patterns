<?php

namespace App\Behavioral\Template\ExerciseOne;

use App\Behavioral\Template\VideoEditingPreset;

class FHDVideoPreset extends VideoEditingPreset
{
    protected function applyColorCorrection(): void
    {
        print("apply color correction...");
    }

    protected function renderVideo(): void
    {
        print("render video for FHD...");
    }
}