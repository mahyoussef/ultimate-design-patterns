#include<iostream>
#include "../Helper/Order.h"
#include "../Helper/Payment.h"
#include "Problem/PaymentProcessor.h"
#include "Solution/PaymentProcessorSol.h"
#include "Solution/VisaPaymentStrategy.h"

using namespace std;

int main() {
	Order ord("laptop", 15550);
	Payment pay("VISA");
	PaymentProcessor paypro;
	paypro.processPayment(ord, pay);

	PaymentProcessorSol payprosol(new VisaPaymentStrategy());
	payprosol.processPayment(ord);
}