package observer.exercise;

import observer.EventType;
import observer.Offer;
import observer.Product;
import observer.Subscriber;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public class BlogManagement {

    private Map<SubscriptionType, List<Subscriber>> subscribers;
    private List<Blog> blogs;
    private List<Newsletter> newsletters;

    public BlogManagement() {
        this.blogs = new ArrayList<>();
        this.newsletters = new ArrayList<>();
        initSubscribers();
    }
    
    public void writeNewBlog(Blog blog) {
        blogs.add(blog);
        notifySubscribers(SubscriptionType.NEW_BLOGS, "New blog is published...");
    }

    public void writeNewsletter(Newsletter newsletter) {
        newsletters.add(newsletter);
        notifySubscribers(SubscriptionType.NEWSLETTER, "New newsletter is published...");
    }

    private void notifySubscribers(SubscriptionType subscriptionType, String message) {
        subscribers.get(subscriptionType).forEach(subscriber -> subscriber.notify(message));
    }

    public void subscribe(SubscriptionType subscriptionType, Subscriber subscriber) {
        subscribers.get(subscriptionType).add(subscriber);
    }

    public void unsubscribe(SubscriptionType subscriptionType, Subscriber subscriber) {
        subscribers.get(subscriptionType).remove(subscriber);
    }

    private void initSubscribers() {
        subscribers.put(SubscriptionType.NEW_BLOGS, new ArrayList<>());
        subscribers.put(SubscriptionType.NEWSLETTER, new ArrayList<>());
    }
}
