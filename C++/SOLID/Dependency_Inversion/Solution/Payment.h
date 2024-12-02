#ifndef PAYMENT_H
#define PAYMENT_H

#include<iostream>
#include"PaymentProcessor.h"

using namespace std;

class Payment: public PaymentProcessor {
public:
	void makePayment(float amount) {
		cout << "Paid " << amount;
	}
};
#endif