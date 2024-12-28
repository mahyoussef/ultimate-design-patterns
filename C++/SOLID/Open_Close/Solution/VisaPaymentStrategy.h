#ifndef VISAPAYMENTSTRATEGY_H
#define VISAPAYMENTSTRATEGY_H

#include<iostream>
#include "../../Helper/Order.h"
#include "../../Helper/Payment.h"
#include "PaymentStrategy.h"

class VisaPaymentStrategy : public PaymentStrategy{
public:
	void processPayment() {
		cout << "Processing visa card payments..." << endl;
	}
};
#endif
