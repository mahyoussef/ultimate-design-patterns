#ifndef CUSTOMER_H
#define CUSTOMER_H

class Customer
{
public:
	Customer(string email) {
		this->email = email;
	}
	string getEmail() {
		return email;
	}
private:
	string email;
};
#endif

