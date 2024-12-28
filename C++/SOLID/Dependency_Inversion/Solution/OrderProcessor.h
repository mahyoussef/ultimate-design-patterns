#ifndef ORDERPROCESSOR_H
#define ORDERPROCESSOR_H

#include<iostream>
#include"Payment.h"
#include"Order.h"

using namespace std;

class OrderProcessor {
public:
	OrderProcessor(Payment* payment) {
		this->payment = payment;
	}
	void processOrder(Order order) {
		cout << "Processing payment of order: " << order.getName() << endl;
		cout << "Issuing payment for amount: " << order.getTotalPrice() << endl;
		payment->makePayment(order.getTotalPrice());
	}
private:
	Payment* payment;
};
#endif