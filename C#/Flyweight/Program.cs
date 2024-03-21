using Flyweight;

IPlayer mainPlayer = PlayersFactory.GetPlayer(PlayerType.MAIN_PLAYER);
mainPlayer.AssignWeapon(new Weapon("Ak-47", 30));
mainPlayer.Attack();

IPlayer weakEnemy = PlayersFactory.GetPlayer(PlayerType.WEAK_ENEMY);
weakEnemy.AssignWeapon(new Weapon("9mm", 2));
weakEnemy.Attack();

IPlayer strongEnemy = PlayersFactory.GetPlayer(PlayerType.STRONG_ENEMY);
strongEnemy.AssignWeapon(new Weapon("RPG", 100));
strongEnemy.Attack();