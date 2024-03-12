<?php
namespace DesignPatterns\Behavioral\Observer\Exercise;

use DesignPatterns\Behavioral\Observer\Exercise\Enums\EventType;
use DesignPatterns\Behavioral\Observer\Exercise\Interfaces\Subscriber;
use DesignPatterns\Behavioral\Observer\Exercise\Models\Blog;
use DesignPatterns\Behavioral\Observer\Exercise\Models\NewsLetter;

class NewsLetterNotification
{
    private array $subscribers;
    /**
     * @var array
     */
    protected array $blogs;
    /**
     * @var array
     */
    protected array $newsletters;
    public function __construct()
    {
        $this->subscribers = [];
        $this->blogs = [];
        $this->newsletters = [];
        $this->initSubscribersEvents();
    }
    /**
     * @return void
     */
    private function initSubscribersEvents(): void
    {
        $this->subscribers[EventType::BLOG->name] = [];
        $this->subscribers[EventType::NEWSLETTER->name] = [];

    }

    /**
     * @param EventType $eventType
     * @param Subscriber $subscriber
     * @return void
     */

    public function subscribe(EventType $eventType, Subscriber $subscriber): void
    {
        $this->subscribers[$eventType->name][] = $subscriber;
    }

    /**
     * @param EventType $eventType
     * @param Subscriber $subscriber
     * @return void
     */
    public function unsubscribe(EventType $eventType, Subscriber $subscriber): void
    {
        $this->subscribers[$eventType->name] = array_filter($this->subscribers[$eventType->name], function ($sub) use ($subscriber) {
            return $sub->getName() !== $subscriber->getName();
        });

    }

    /**
     * @param Blog $blog
     * @return void
     */
    public function addBlog(Blog $blog): void
    {
        $this->blogs[] = $blog;
        $this->notifySubscribers(EventType::BLOG, "New blog added " . $blog->getTitle() . " at " . $blog->getPublishedAt()->format('Y-m-d H:i:s') . ".");
    }

    /**
     * @param NewsLetter $news
     * @return void
     */
    public function addNewsLetter(NewsLetter $news): void
    {
        $this->newsletters[] = $news;
        $this->notifySubscribers(EventType::NEWSLETTER, "New NewsLetter added " . $news->getTitle() . " at " . $news->getPublishedAt()->format('Y-m-d H:i:s') . ".");
    }

    /**
     * @param EventType $eventType
     * @param string $message
     * @return void
     */
    private function notifySubscribers(EventType $eventType, string $message): void
    {
        foreach ($this->subscribers[$eventType->name] as $subscriber) {
            $subscriber->notify($message);
        }
    }

}
