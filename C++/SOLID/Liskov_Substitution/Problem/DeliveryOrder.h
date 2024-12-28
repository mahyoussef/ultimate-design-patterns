#ifndef DELIVERYORDER_H
#define DELIVERYORDER_H

#include"Order.h"
#include<string>

class DeliveryOrder :public Order {
public:
	DeliveryOrder(string name, float price) :Order(name, price) {};
};
#endif