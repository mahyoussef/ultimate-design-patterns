<?php

namespace DesignPatterns\Behavioral\Observer;

use DesignPatterns\Behavioral\Observer\Enums\EventType;
use DesignPatterns\Behavioral\Observer\Interfaces\Subscriber;
use DesignPatterns\Behavioral\Observer\Models\Offer;
use DesignPatterns\Behavioral\Observer\Models\Product;

class OnlineMarketPlace
{
    private array $subscribers;
    protected array $products;
    protected array $offers;

    public function __construct()
    {
        $this->subscribers = [];
        $this->products = [];
        $this->offers = [];
        $this->initSubscribersEvents();
    }

    /**
     * @return void
     */
    private function initSubscribersEvents(): void
    {
        $this->subscribers[EventType::OPEN_POSITION->name] = [];
        $this->subscribers[EventType::NEW_PRODUCT->name] = [];
        $this->subscribers[EventType::NEW_OFFER->name] = [];
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
     * @param Product $product
     * @return void
     */
    public function addProduct(Product $product): void
    {
        $this->products[] = $product;
        $this->notifySubscribers(EventType::NEW_PRODUCT, "New product is added " . $product->getName());

    }

    /**
     * @param Offer $offer
     * @return void
     */
    public function addOffer(Offer $offer): void
    {
        $this->offers[] = $offer;
        $this->notifySubscribers(EventType::NEW_OFFER, "New offer added " . $offer->getMessage());

    }

    public function addNewJobOpening(string $jobOpeningMessage): void
    {
        $this->notifySubscribers(EventType::OPEN_POSITION, "New Opening Position is available" . $jobOpeningMessage);
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
