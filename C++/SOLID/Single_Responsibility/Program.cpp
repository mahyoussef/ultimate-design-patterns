#include<iostream>
#include "Problem/OrderManager.h"
#include "../Helper/Order.h"
#include "../Helper/Payment.h"
#include "../Helper/Customer.h"
#include "Solution/OrderManagement.h"
#include "Solution/PaymentProcessor.h"
#include "Solution/NotificationService.h"

using namespace std;


int main() {
	Order ord("laptop", 15550);
	OrderManager man;
	man.processOrder(ord);
	Payment pay("VISA");
	man.processPayment(ord, pay);
	Customer cus("memo@gmail.com");
	man.sendEmailNotification(cus, "lets");

	OrderManagement ordman;
	ordman.processOrder(ord);

	PaymentProcessor paypro;
	paypro.processPayment(ord, pay);

	NotificationService notser;
	notser.sendEmailNotification(cus, "lets");
}