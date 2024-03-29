<?php
namespace DesignPatterns\Behavioral\Observer\Exercise\Models;

use DateTime;
use DesignPatterns\Behavioral\Observer\Interfaces\Subscriber;
use Override;

class Blog implements Subscriber
{

    /**
     * @var string
     */
    private string $title;

    private string $content;

    private DateTime $published_at;

    /**
     * @param string $title
     */
    public function __construct(string $title , string $content, DateTime $published_at)
    {
        $this->title = $title;
        $this->content = $content;
        $this->published_at = $published_at;
    }

    /**
     * @return string
     */
    public function getTitle(): string
    {
        return $this->title;
    }

    public function getContent(): string
    {
        return $this->content;
    }

    public function getPublishedAt(): DateTime
    {
        return $this->published_at;
    }

    /**
     * @param string $message
     * @return void
     */
    #[Override] public function notify(string $message): void
    { 
        echo  "Blog: " . $message . PHP_EOL;
    }

    
}
