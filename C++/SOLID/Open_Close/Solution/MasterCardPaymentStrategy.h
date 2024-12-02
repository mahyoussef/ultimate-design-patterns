#ifndef MASTERCARDPAYMENTSTRATEGY_H
#define MASTERCARDPAYMENTSTRATEGY_H

#include<iostream>
#include "../../Helper/Order.h"
#include "../../Helper/Payment.h"
#include "PaymentStrategy.h"

class MasterCardPaymentStrategy : public PaymentStrategy {
public:
	void processPayment(Order order, Payment payment) {
		cout << "Processing master card payments..." << endl;
	}
};
#endif
