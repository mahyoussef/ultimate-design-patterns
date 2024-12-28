#ifndef ORDER_H
#define ORDER_H

#include <string>

using namespace std;

class Order {
public:
	Order(string name, float price) {
		this->name = name;
		this->price = price;
	}
	float getPrice() {
		return price;
	}
	virtual float getTotalPrice() {
		return price + shippingCost;
	}
private:
	string name;
	float price;
protected:
	static const int shippingCost = 10;
};
#endif
