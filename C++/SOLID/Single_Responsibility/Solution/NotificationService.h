#ifndef NOTIFICATIONSERVICE_H
#define NOTIFICATIONSERVICE_H

#include<iostream>
#include"../Helper/Customer.h"

using namespace std;

class NotificationService {
public:
	void sendEmailNotification(Customer customer, string message) {
		cout << "Sending email notification to: " << customer.getEmail() << " with message: " << message << endl;
	}
};
#endif
