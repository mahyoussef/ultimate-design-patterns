namespace Flyweight;

public sealed class MainPlayer : IPlayer
{
    public string DisplayName { get; }
    public int AttackPower { get; } = 5;
    public int HealthBar { get; } = 100;
    public Weapon Weapon { get; set; }

    public MainPlayer(string displayName)
    {
        Console.WriteLine("Creating main player...");
        DisplayName = displayName;
    }

    public void AssignWeapon(Weapon weapon)
        => Weapon = weapon;

    public void Attack()
        => Console.WriteLine($"Player: {DisplayName} is attacking with weapon: {Weapon.Name} with base attack damage: {AttackPower}");
}
