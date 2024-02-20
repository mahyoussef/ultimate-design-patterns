package flyweight;

public class Enemy implements Player {

    private final String displayName = "Enemy Bot";
    private final int attackPower;
    private final int healthBar;
    private Weapon weapon = new Weapon("Rifle", 0);

    public Enemy(int attackPower, int healthBar) {
        System.out.println("Creating Enemy...");
        this.attackPower = attackPower;
        this.healthBar = healthBar;
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
