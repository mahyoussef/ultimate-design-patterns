#ifndef PICKUPORDER_H
#define PICKUPORDER_H

#include"Order.h"

class PickupOrder:public Order {
public:
	PickupOrder(string name, float price) :Order(name, price) {};
};
#endif