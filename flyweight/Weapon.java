package flyweight;

public class Weapon {
    private String name;
    private int bonusAttackDamage;

    public Weapon(String name, int bonusAttackDamage) {
        this.name = name;
        this.bonusAttackDamage = bonusAttackDamage;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getBonusAttackDamage() {
        return bonusAttackDamage;
    }

    public void setBonusAttackDamage(int bonusAttackDamage) {
        this.bonusAttackDamage = bonusAttackDamage;
    }
}
