#ifndef SUBSCRIBER_H
#define SUBSCRIBER_H

#include<iostream>
#include<string>
#include"IUserManager.h"

using namespace std;

class Subscriber :public IUserManager {
public:
	Subscriber(string email) {
		this->email = email;
	}
	string getEmail() {
		return email;
	}
	//implement two function which is not needed
	void updateUserProfile(Customer customer) {
		
	}
	void changePassword(Customer customer, string newPassword) {
		
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
