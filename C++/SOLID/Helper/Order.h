#ifndef ORDER_H
#define ORDER_H

#include<string>
using namespace std;

class Order
{
public:
	Order(string name, float totalPrice) {
		this->name = name;
		this->totalPrice = totalPrice;
	}
	string getName() {
		return name;
	}
	float getTotalPrice() {
		return totalPrice;
	}

private:
	string name;
	float totalPrice;
};
#endif


