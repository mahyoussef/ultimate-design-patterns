#ifndef PAYMENTSTRATEGY_H
#define PAYMENTSTRATEGY_H

#include "../../Helper/Order.h"
#include "../../Helper/Payment.h"

class PaymentStrategy
{
public:
	virtual void processPayment()=0;
};
#endif
