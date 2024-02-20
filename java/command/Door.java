package command;

public class Door {
    private String name;

    public Door(String name) {
        this.name = name;
    }

    public void lock(){
        System.out.println("Locking door...");
    }

    public void unlock() {
        System.out.println("Unlocking door...");
    }

    public String getName() {
        return name;
    }
}
