namespace Flyweight;

public sealed class Weapon
{
    public string Name { get; set; }
    public int BonusAttackDamage { get; set; }

    public Weapon(string name, int bonusAttackDamage)
    {
        Name = name;
        BonusAttackDamage = bonusAttackDamage;
    }
}
