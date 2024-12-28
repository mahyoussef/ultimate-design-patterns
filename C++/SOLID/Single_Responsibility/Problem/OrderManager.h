#ifndef ORDERMANAGER_H
#define ORDERMANAGER_H

#include<iostream>
#include "../Helper/Order.h"
#include "../Helper/Payment.h"
#include "../Helper/Customer.h"

using namespace std;

class OrderManager {
public:
	void processOrder(Order order) {
		cout << "Processing order: " << order.getName() << " now..." << endl;
	}
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
	void sendEmailNotification(Customer customer, string message) {
		cout << "Sending email notification to: " << customer.getEmail() << " with message: " << message << endl;
	}
};
#endif 


