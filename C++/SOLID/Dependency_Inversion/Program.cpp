#include<iostream>
//#include"Problem/OrderProcessor.h";
#include"Problem/Order.h";
#include"Solution/OrderProcessor.h";
#include"Solution/Payment.h"

using namespace std;

int main() {
	/*OrderProcessor ordpro;
	Order order{ "tv",150 };

	ordpro.processOrder(order);*/

	Order order{ "tv",150 };
	Payment* payment = new Payment();
	OrderProcessor ordpro(payment);
	ordpro.processOrder(order);
}