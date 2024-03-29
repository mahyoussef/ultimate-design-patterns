<?php

namespace Behavioral\Memento;

class TextEditorState
{
    private $content;

    

    public function __construct(string $content)
    {
        $this->content = $content;
    }

    /**
     * Get the value of content
     */ 
    public function getContent()
    {
        return $this->content;
    }

    /**
     * Set the value of content
     *
     * @return  self
     */ 
    public function setContent($content)
    {
        return $this->content = $content;

    }
}