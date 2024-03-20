namespace Flyweight;

public sealed class Enemy : IPlayer
{
    public string DisplayName { get; } = "Enemy Bot";
    public int AttackPower { get; }
    public int HealthBar { get; }
    public Weapon Weapon { get; set; } = new("Rifle", 0);

    public Enemy(int attackPower, int healthBar)
    {
        Console.WriteLine("Creating enemy...");
        AttackPower = attackPower;
        HealthBar = healthBar;
    }


    public void AssignWeapon(Weapon weapon)
        => Weapon = weapon;

    public void Attack()
        => Console.WriteLine($"Player: {DisplayName} is attacking with weapon: {Weapon.Name} with base attack damage: {AttackPower}");
}
