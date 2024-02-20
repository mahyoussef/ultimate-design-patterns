package flyweight;

public class MainPlayer implements Player {

    private final String displayName;
    private final int attackPower = 5;
    private final int healthBar = 100;
    private Weapon weapon;

    public MainPlayer(String displayName) {
        System.out.println("Creating Main Player...");
        this.displayName = displayName;
    }

    public String getDisplayName() {
        return displayName;
    }

    public int getAttackPower() {
        return attackPower;
    }


    public int getHealthBar() {
        return healthBar;
    }

    public Weapon getWeapon() {
        return weapon;
    }

    public void setWeapon(Weapon weapon) {
        this.weapon = weapon;
    }

    @Override
    public void attack() {
        System.out.println("Player: " + displayName + " is attacking with weapon: "
                + weapon.getName() + " with base attack damage: " + attackPower);
    }

    @Override
    public void assignWeapon(Weapon weapon) {
        this.weapon = weapon;
    }
}
