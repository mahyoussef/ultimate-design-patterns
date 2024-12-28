#ifndef IUSERMANAGER_H
#define IUSERMANAGER_H

#include"Customer.h"

class IUserManager {
	virtual void updateUserProfile(Customer customer) = 0;
	virtual void changePassword(Customer customer,string newPassword) = 0;
	virtual void subscribeToNewProductsAvailability() = 0;
	virtual void subscribeToMSNotifications() = 0;
};
#endif
