package command;

public class Tv {
    private String name;

    public Tv(String name) {
        this.name = name;
    }

    public void turnOn() {
        System.out.println("Turning on TV");
    }

    public void turnOff() {
        System.out.println("Turning off TV");
    }

    public String getName() {
        return name;
    }
}
