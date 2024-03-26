import 'package:Strategy_design/behavioral/command/command_interface.dart';
import 'package:Strategy_design/behavioral/command/models/door_model.dart';

class UnLockDoor implements CommandInterface {
  final DoorModel door;

  UnLockDoor(DoorModel doorModel) : this.door = doorModel;

  @override
  void execute() {
    door.unlockDoor();
  }
}
