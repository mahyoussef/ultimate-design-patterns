#include <iostream>
#include "string"
//#include "Problem/Order.h"
//#include "Problem/PickupOrder.h"
//#include "Problem/DeliveryOrder.h"
#include "Solution/Order.h"
#include "Solution/PickupOrder.h"
#include "Solution/DeliveryOrder.h"

using namespace std;

void calculate(Order& order) {
	cout << order.getTotalPrice()<<endl;
}

int main() {
	//problem
	//Order order("laptop", 150);
	//PickupOrder piorder("tv", 180);
	//DeliveryOrder delorder("pc", 190);
	//calculate(order); //160
	//calculate(piorder); //190, Error it must be only 180
	//calculate(delorder); //200
	
	//solution
	Order order("laptop", 150);
	PickupOrder piorder("tv", 180);
	DeliveryOrder delorder("pc", 190);
	calculate(order); //160
	calculate(piorder); //180 only because it is pickuporder so there is no shipping cost
	calculate(delorder); //200
}