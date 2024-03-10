<?php

 
use DesignPatterns\Behavioral\Observer\Exercise\Models\Blog;
use DesignPatterns\Behavioral\Observer\Exercise\Models\User;
use DesignPatterns\Behavioral\Observer\Exercise\Enums\EventType;
use DesignPatterns\Behavioral\Observer\Exercise\Models\NewsLetter;
use DesignPatterns\Behavioral\Observer\Exercise\NewsLetterNotification;
 

require_once __DIR__ . DIRECTORY_SEPARATOR . 'vendor' . DIRECTORY_SEPARATOR . 'autoload.php';


// online marketplace example
//$onlineMarketPlace = new OnlineMarketPlace();
//
//$onlineMarketPlace->subscribe(EventType::NEW_PRODUCT, new Customer('John'));
//$onlineMarketPlace->subscribe(EventType::NEW_PRODUCT, new Customer('ahmed'));
//$onlineMarketPlace->subscribe(EventType::NEW_OFFER, new Customer('helmy'));
//
//$onlineMarketPlace->unsubscribe(EventType::NEW_PRODUCT, new Customer('ahmed'));
//
//$onlineMarketPlace->addProduct(new Product('Shoes', 100));
//$onlineMarketPlace->addOffer(new Offer('Discount on shoes', 10));


// newsletter example
// Get the current date and time
$publishedAt = new DateTime();
$newsletter = new NewsLetterNotification();
$newsletter->subscribe(EventType::BLOG,new User('Ahmed'));
$newsletter->addBlog(new Blog('test blog tilte','test blog content',$publishedAt));
$newsletter->addNewsLetter(new NewsLetter('test newsletter tilte','test newsletter content',$publishedAt));
