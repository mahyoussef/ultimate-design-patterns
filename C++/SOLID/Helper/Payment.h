#ifndef PAYMENT_H
#define PAYMENT_H

class Payment
{
public:
	Payment(string type) {
		this->type = type;
	}
	string getType() {
		return type;
	}
private:
	string type;
};
#endif

