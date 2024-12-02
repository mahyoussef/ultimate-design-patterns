#ifndef ISUBSCRIBERNOTIFICATIONSERVICE_H
#define ISUBSCRIBERNOTIFICATIONSERVICE_H

class ISubscriverNotificationService {
	virtual void subscribeToNewProductsAvailability() = 0;
	virtual void subscribeToMSNotifications() = 0;
};
#endif
