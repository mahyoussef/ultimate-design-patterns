<?php

use Solid\Interfaces\PaymentProcessorInterface;
use Solid\HelperClasses\Payment;
use Solid\HelperClasses\Order;
use Solid\Processors\VisaProcessor;
use Solid\Processors\AmericanExpressProcessor;
use Solid\Processors\MasterCardProcessor;

class PaymentProcessor
{

    public function processPayment(Order $order, Payment $payment)
    {
        echo "Processing payment of order {$order->getName()}\n";
        echo "Issuing payment for amount {$order->getPrice()}\n";

        // Get the processor based on payment type
        $processor = $this->getPaymentProcessor($payment->getType());

        // Process the payment based on the correct processor
        $processor->process($order, $payment);
    }

    private function getPaymentProcessor(string $type): PaymentProcessorInterface
    {
        switch ($type) {
            case 'VISA':
                return new VisaProcessor();
            case 'Master_Card':
                return new MasterCardProcessor();
            case 'American_Express':
                return new AmericanExpressProcessor();
            default:
                throw new Exception("Unsupported payment type: {$type}");
        }
    }
}