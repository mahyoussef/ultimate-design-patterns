package observer.exercise;

import observer.Subscriber;

public class User implements Subscriber {
    private String name;

    public User(String name) {
        this.name = name;
    }

    @Override
    public void notify(String message) {
        System.out.println(name + " is receiving message: " + message);
    }

    public String getName() {
        return name;
    }
}
