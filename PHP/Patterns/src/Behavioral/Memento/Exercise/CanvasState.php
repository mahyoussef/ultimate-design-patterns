<?php

namespace App\Behavioral\Memento\Exercise;

class CanvasState
{
    private $content;
    private $color;
    private $border;

    public function __construct($content, $color, $border)
    {
        $this->content = $content;
        $this->color = $color;
        $this->border = $border;
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

}
