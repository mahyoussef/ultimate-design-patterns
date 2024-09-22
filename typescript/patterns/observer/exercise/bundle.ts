type SubscriptionType = "NEW_BLOGS" | "NEWSLETTER";

interface Subscriber {
  notify(message: string): void;
}

class Blog {
  constructor(private name: string) {}

  getName() {
    return this.name;
  }
}

class Newsletter {
  constructor(private name: string) {}

  getName() {
    return this.name;
  }
}

class User {
  constructor(private name: string) {}

  getName() {
    return this.name;
  }

  notify(message: string) {
    console.log(`${this.name} is receiving message: ${message}`);
  }
}

class BlogManagement {
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

const blogManagement = new BlogManagement();
const ahmed = new User("Ahmed");
const ali = new User("Ali");
const hussein = new User("Hussein");

blogManagement.subscribe("NEW_BLOGS", ahmed);
blogManagement.subscribe("NEWSLETTER", ahmed);

blogManagement.subscribe("NEW_BLOGS", ali);

blogManagement.subscribe("NEWSLETTER", hussein);

blogManagement.writeNewBlog(new Blog("Design Patterns"));
blogManagement.writeNewsletter(new Newsletter("Weekly Newsletter 1"));
