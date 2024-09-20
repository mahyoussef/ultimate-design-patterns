import type { EventType } from "./event-type";
import { Offer } from "./offer";
import { Product } from "./product";
import type { Subscriber } from "./subscriber";

export class OnlineMarketplace {
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

  addNewOffer(offer: Offer) {
    this.offers.push(offer);
    this.notifySubscribers(
      "NEW_OFFER",
      `New offer is added: ${offer.getMessage()}`
    );
  }

  addNewJobOpening(jobTitle: string) {
    this.notifySubscribers(
      "JOB_OPENING",
      `New opening position is available: ${jobTitle}`
    );
  }

  private notifySubscribers(eventType: EventType, message: string) {
    this.subscribers[eventType].forEach((subscriber) =>
      subscriber.notify(message)
    );
  }
}
