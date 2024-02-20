package observer;

public class JobFinder implements Subscriber {
    private String name;

    public JobFinder(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    @Override
    public void notify(String message) {
        System.out.println(name + " is receiving a notification about job finding: " + message);
    }
}
