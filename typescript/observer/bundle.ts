type EventType = "NEW_PRODUCT" | "NEW_OFFER" | "JOB_OPENING";

interface Subscriber {
  notify(message: string): void;
}

class Product {
  constructor(private name: string, private price: number) {}

  getName() {
    return this.name;
  }

  getPrice() {
    return this.price;
  }
}

class Offer {
  constructor(private message: string) {}

  getMessage() {
    return this.message;
  }
}

class Customer implements Subscriber {
  constructor(private name: string) {}

  getName() {
    return this.name;
  }

  notify(message: string) {
    console.log(`Notifying user: ${this.name} about: ${message}`);
  }
}

class JobFinder implements Subscriber {
  constructor(private name: string) {}

  getName() {
    return this.name;
  }

  notify(message: string) {
    console.log(
      `${this.name} is receiving a notification about job finding: ${message}`
    );
  }
}

class ShippingCompany implements Subscriber {
  constructor(private name: string) {}

  getName() {
    return this.name;
  }

  notify(message: string) {
    console.log(`${this.name} is receiving a notification about: ${message}`);
  }
}

class OnlineMarketplace {
  private subscribers: Record<EventType, Subscriber[]>;
  private products: Product[];
  private offers: Offer[];

  constructor() {
    this.subscribers = {
      NEW_PRODUCT: [],
      NEW_OFFER: [],
      JOB_OPENING: [],
    };
    this.products = [];
    this.offers = [];
  }

  subscribe(eventType: EventType, subscriber: Subscriber) {
    this.subscribers[eventType].push(subscriber);
  }

  unsubscribe(eventType: EventType, subscriber: Subscriber) {
    this.subscribers[eventType] = this.subscribers[eventType].filter(
      (s) => s !== subscriber
    );
  }

  addNewProduct(product: Product) {
    this.products.push(product);
    this.notifySubscribers(
      "NEW_PRODUCT",
      `New product is added: ${product.getName()}`
    );
  }

  addNewJobOpening(jobTitle: string) {
    this.notifySubscribers(
      "JOB_OPENING",
      `New opening position is available: ${jobTitle}`
    );
  }

  addNewOffer(offer: Offer) {
    this.offers.push(offer);
    this.notifySubscribers(
      "NEW_OFFER",
      `New offer is added: ${offer.getMessage()}`
    );
  }

  notifySubscribers(eventType: EventType, message: string) {
    this.subscribers[eventType].forEach((subscriber) =>
      subscriber.notify(message)
    );
  }
}

// example usage
const onlineMarketplace = new OnlineMarketplace();
const ahmed = new Customer("Ahmed");
const mahmoud = new Customer("Mahmoud");
const youssef = new Customer("Youssef");
const mostafa = new Customer("Mostafa");
const shippingCompany = new ShippingCompany("DHL");

onlineMarketplace.subscribe("NEW_PRODUCT", ahmed);
onlineMarketplace.subscribe("NEW_OFFER", ahmed);

onlineMarketplace.subscribe("NEW_OFFER", mahmoud);

onlineMarketplace.subscribe("NEW_PRODUCT", youssef);

onlineMarketplace.subscribe("JOB_OPENING", mostafa);

onlineMarketplace.subscribe("NEW_PRODUCT", shippingCompany);

onlineMarketplace.addNewProduct(new Product("Mobile", 1000));
onlineMarketplace.addNewOffer(
  new Offer("New offer with 20% discount for every item")
);
onlineMarketplace.addNewJobOpening("SalesMan");
