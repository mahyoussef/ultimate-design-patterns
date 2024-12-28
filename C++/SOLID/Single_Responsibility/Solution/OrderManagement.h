#ifndef ORDERMANAGEMENT_H
#define ORDERMANAGEMENT_H

#include<iostream>
#include "../Helper/Order.h"

class OrderManagement {
public:
	void processOrder(Order order) {
		cout << "Processing order: " << order.getName() << " now..." << endl;
	}
};
#endif

