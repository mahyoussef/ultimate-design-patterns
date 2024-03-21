using System.Diagnostics;

namespace Flyweight;

public sealed class PlayersFactory
{
    private static readonly Dictionary<PlayerType, IPlayer> _inMemoryCachedPlayers = [];

    public static IPlayer GetPlayer(PlayerType playerType)
    {
        if (_inMemoryCachedPlayers.TryGetValue(playerType, out IPlayer? value))
        {
            return value;
        }

        IPlayer player = playerType switch
        {
            PlayerType.MAIN_PLAYER => new MainPlayer("Default Main Player"),
            PlayerType.WEAK_ENEMY => new Enemy(1, 50),
            PlayerType.STRONG_ENEMY => new Enemy(5, 50),
            _ => throw new UnreachableException("Unsupported player type")
        };

        _inMemoryCachedPlayers.Add(playerType, player);
        return player;
    }
}
