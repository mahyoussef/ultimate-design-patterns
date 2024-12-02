#ifndef PAYMENTPROCESSOR_H
#define PAYMENTPROCESSOR_H

#include<iostream>
#include"../Helper/Order.h"
#include"../Helper/Payment.h"

class PaymentProcessor {
public:
	void processPayment(Order order, Payment payment) {
		cout << "Processing payment of order: " << order.getName() << endl;
		cout << "Issuing payment for amount: " << order.getTotalPrice() << endl;
		if (payment.getType() == "MASTER_CARD") {
			cout << "Processing master card payments..." << endl;
		}
		else if (payment.getType() == "VISA") {
			cout << "Processing visa card payments..." << endl;
		}
		else if (payment.getType() == "AMERICAN_EXPRESS") {
			cout << "Processing american express card payments..." << endl;
		}
		else {
			throw std::runtime_error("Unsupported payment type: " + payment.getType() + "\n");
		}
	}
};
#endif

