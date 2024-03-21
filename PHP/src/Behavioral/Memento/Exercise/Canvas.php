<?php

namespace App\Behavioral\Memento\Exercise;

class Canvas
{
    private $content;
    private $color;
    private $border;

    public function __construct()
    {
        $this->content = '';
        $this->color = '';
        $this->border = '';
    }

    /**
     * @return string
     */
    public function getContent(): string
    {
        return $this->content;
    }

    /**
     * Set the value of content
     *
     * @return  void
     */
    public function setContent($content)
    {
        $this->content = $content;

    }

    /**
     * @return string
     */
    public function getColor(): string
    {
        return $this->color;
    }

    /**
     * Set the value of color
     *
     * @return  void
     */
    public function setColor($color)
    {
        $this->color = $color;

    }

    /**
     * @return string
     */
    public function getBorder(): string
    {
        return $this->border;
    }

    /**
     * Set the value of border
     *
     * @return  void
     */
    public function setBorder($border)
    {
        $this->border = $border;

    }

    public function save(): CanvasState
    {
        return new CanvasState($this->content, $this->color, $this->border);
    }

    public function restore(CanvasState $canvasState): void
    {
        $this->content = $canvasState->getContent();
        $this->color = $canvasState->getColor();
        $this->border = $canvasState->getBorder();
    }
}
