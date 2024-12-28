#ifndef PAYMENT_H
#define PAYMENT_H

#include<iostream>

using namespace std;

class Payment {
public:
	void makePayment(float amount) {
		cout << "Paid " << amount;
	}
};
#endif
