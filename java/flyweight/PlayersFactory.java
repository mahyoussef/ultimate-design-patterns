package flyweight;

import java.util.HashMap;
import java.util.Map;

public class PlayersFactory {

    private static final Map<PlayerType, Player> inMemoryCachedPlayers = new HashMap<>();

    private PlayersFactory(){
    }

    public static Player getPlayer(PlayerType playerType) {
        if (inMemoryCachedPlayers.containsKey(playerType)) {
            return inMemoryCachedPlayers.get(playerType);
        }
        Player player = null;
        switch (playerType) {
            case MAIN_PLAYER -> player = new MainPlayer("Default Main Player");
            case WEAK_ENEMY -> player = new Enemy(1, 10);
            case STRONG_ENEMY -> player = new Enemy(5, 50);
        }
        if (player == null) {
            throw new UnsupportedOperationException("Unsupported player type");
        }
        inMemoryCachedPlayers.put(playerType, player);
        return player;
    }
}
