import { Blog } from "./blog";
import { Newsletter } from "./newsletter";
import type { Subscriber } from "./subscriber";
import type { SubscriptionType } from "./subscription-type";

export class BlogManagement {
  private subscribers: Record<SubscriptionType, Subscriber[]>;
  private blogs: Blog[];
  private newsletters: Newsletter[];

  constructor() {
    this.subscribers = {
      NEW_BLOGS: [],
      NEWSLETTER: [],
    };
    this.blogs = [];
    this.newsletters = [];
  }

  writeNewBlog(blog: Blog) {
    this.blogs.push(blog);
    this.notifySubscribers("NEW_BLOGS", `New blog is published...`);
  }

  writeNewsletter(newsletter: Newsletter) {
    this.newsletters.push(newsletter);
    this.notifySubscribers("NEWSLETTER", `New newsletter is published...`);
  }

  private notifySubscribers(
    subscriptionType: SubscriptionType,
    message: string
  ) {
    this.subscribers[subscriptionType].forEach((subscriber) =>
      subscriber.notify(message)
    );
  }

  subscribe(subscriptionType: SubscriptionType, subscriber: Subscriber) {
    this.subscribers[subscriptionType].push(subscriber);
  }

  unsubscribe(subscriptionType: SubscriptionType, subscriber: Subscriber) {
    this.subscribers[subscriptionType] = this.subscribers[
      subscriptionType
    ].filter((s) => s !== subscriber);
  }
}
