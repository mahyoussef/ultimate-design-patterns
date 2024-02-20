package command;

public class Light {

    private String name;

    public Light(String name) {
        this.name = name;
    }

    public void turnOn() {
        System.out.println("Turning on light....");
    }

    public void turnOff() {
        System.out.println("Turning off light....");
    }

    public String getName() {
        return name;
    }
}
