#ifndef PAYMENTPROCESSORSOL_H
#define PAYMENTPROCESSORSOL_H

#include<iostream>
#include"../../Helper/Order.h"
#include"../../Helper/Payment.h"
#include"PaymentStrategy.h"

class PaymentProcessorSol {
public:
	PaymentProcessorSol(PaymentStrategy* PaymentStrategy) {
		this->PaymentStrategy = PaymentStrategy;
	}
	void processPayment(Order order) {
		cout << "Processing payment of order: " << order.getName() << endl;
		cout << "Issuing payment for amount: " << order.getTotalPrice() << endl;
		PaymentStrategy->processPayment();
	}
private:
	PaymentStrategy* PaymentStrategy;
};
#endif
