#ifndef CUSTOMER_H
#define CUSTOMER_H

#include<iostream>
#include<string>
#include"IUserManager.h"
#include"ISubscriberNotificationService.h"

using namespace std;

class Customer :public IUserManager,public ISubscriverNotificationService {
public:
	Customer(string name, string email) {
		this->name = name;
		this->email = email;
	}
	string getName() {
		return name;
	}
	string getEmail() {
		return email;
	}
	void updateUserProfile(Customer customer) {
		cout << "Updating user profile " << customer.getName() << "..." << endl;
	}
	void changePassword(Customer customer, string newPassword) {
		cout << "Updating user password " << customer.getName() << "..." << endl;
	}
	void subscribeToNewProductsAvailability() {
		cout << "Subscribing to new products availability..." << endl;
	}
	void subscribeToMSNotifications() {
		cout << "Subscribing to new products availability..." << endl;
	}
private:
	string name;
	string email;
};
#endif


