<?php

namespace App\Behavioral\Template;

abstract class VideoEditingPreset
{
    public function applyPreset(): void
    {
        $this->applyColorCorrection();
        $this->applyFilters();
        $this->enhanceVideoQuality();
        $this->enhanceAudioQuality();
        $this->renderVideo();
    }

    private function applyFilters(): void
    {
    }
    abstract protected function applyColorCorrection(): void;

    private function enhanceVideoQuality():void{}
    private function enhanceAudioQuality():void{}

    protected abstract function renderVideo():void;
}
