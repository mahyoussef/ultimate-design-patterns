<?php

namespace Behavioral\Memento;

class TextEditor
{
    private $content;

    public function __construct()
    {
        $this->content = '';
    }
    /**
     * @return string
     */
    public function getContent(): string
    {
        return $this->content;
    }

    /**
     * @return  void
     */
    public function setContent($content): void
    {
        $this->content = $content;
    }

    public function save(): TextEditorState
    {
        return new TextEditorState($this->content);
    }

    public function restore(TextEditorState $memento): void
    {
        $this->content = $memento->getContent();
    }
}
