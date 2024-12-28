#ifndef IUSERMANAGER_H
#define IUSERMANAGER_H

#include"Customer.h"

class IUserManager {
	virtual void updateUserProfile(Customer customer) = 0;
	virtual void changePassword(Customer customer, string newPassword) = 0;
};
#endif
