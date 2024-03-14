<?php

use DesignPatterns\Behavioral\Strategy\Models\Product;
use DesignPatterns\Behavioral\Strategy\Models\Checkout;
use DesignPatterns\Behavioral\Strategy\ExerciseTwo\MessageFormatter;
use DesignPatterns\Behavioral\Strategy\MemberTypes\GoldMemberStrategy;
use DesignPatterns\Behavioral\Strategy\ExerciseTwo\Types\JsonFormatter;
use DesignPatterns\Behavioral\Strategy\PaymentWays\CashPaymentStrategy;
use DesignPatterns\Behavioral\Strategy\MemberTypes\PremiumMemberStrategy;
use DesignPatterns\Behavioral\Strategy\MemberTypes\RegularMemberStrategy;
use DesignPatterns\Behavioral\Strategy\PaymentWays\PaypalPaymentStrategy;
use DesignPatterns\Behavioral\Strategy\PaymentWays\VisaCardPaymentStrategy;
use DesignPatterns\Behavioral\Strategy\MemberTypes\PremiumPlusMemberStrategy;
use DesignPatterns\Behavioral\Strategy\PaymentWays\BankTransferPaymentStrategy;

$DS = DIRECTORY_SEPARATOR;
require_once __DIR__ . $DS . '..' . $DS . '..' . $DS . '..' . $DS . 'vendor' . $DS . 'autoload.php';

// $wallet = new Product(100, 'wallet', new RegularMemberStrategy());
// $walletPrice = $wallet->getPrice();

// echo 'wallet price: ' . $walletPrice;

// $jacket = new Product(100, 'jacket', new GoldMemberStrategy());
// $jacketPrice = $jacket->getPrice();

// echo 'jacket price: ' . $jacketPrice;

// $mobile = new Product(100, 'mobile', new PremiumMemberStrategy());
// $mobilePrice = $mobile->getPrice();

// echo 'mobile price: ' . $mobilePrice;

// $laptop = new Product(100, 'laptop', new PremiumPlusMemberStrategy());
// $laptopPrice = $laptop->getPrice();

// (new Checkout(new BankTransferPaymentStrategy()))->processPayment($walletPrice);
// (new Checkout(new PaypalPaymentStrategy()))->processPayment($jacketPrice);
// (new Checkout(new VisaCardPaymentStrategy()))->processPayment($mobilePrice);

// $visaCardCheckout = new Checkout(new VisaCardPaymentStrategy());
// $visaCardCheckout->processPayment($mobilePrice);

// $bankTransferCheckout = new Checkout(new BankTransferPaymentStrategy());
// $bankTransferCheckout->processPayment($jacketPrice);

// $paypalCheckout = new Checkout(new PaypalPaymentStrategy());
// $paypalCheckout->processPayment($walletPrice);

// $cashCheckout = new Checkout(new CashPaymentStrategy());
// $cashCheckout->processPayment($laptopPrice);

$jsonFormatter = new MessageFormatter();
$jsonFormatter->setMessageFormatter(new JsonFormatter());
echo $jsonFormatter->format('Hello World');
echo $jsonFormatter->getType();