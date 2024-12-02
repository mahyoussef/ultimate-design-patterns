#ifndef SUBSCRIBER_H
#define SUBSCRIBER_H

#include<iostream>
#include<string>
#include"ISubscriberNotificationService.h"

using namespace std;

class Subscriber :public ISubscriverNotificationService {
public:
	Subscriber(string email) {
		this->email = email;
	}
	string getEmail() {
		return email;
	}
	void subscribeToNewProductsAvailability() {
		cout << "Subscribing to new products availability..." << endl;
	}
	void subscribeToMSNotifications() {
		cout << "Subscribing to new products availability..." << endl;
	}
private:
	string email;
};
#endif
