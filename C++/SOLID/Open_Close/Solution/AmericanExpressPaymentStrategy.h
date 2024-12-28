#ifndef AMERICANEXPRESSPAYMENTSTRATEGY_H
#define AMERICANEXPRESSPAYMENTSTRATEGY_H

#include<iostream>
#include "../../Helper/Order.h"
#include "../../Helper/Payment.h"
#include "PaymentStrategy.h"

class AmericanExpressPaymentStrategy : public PaymentStrategy {
public:
	void processPayment() {
		cout << "Processing american express card payments..." << endl;
	}
};
#endif
