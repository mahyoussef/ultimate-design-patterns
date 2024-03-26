import 'package:Strategy_design/behavioral/command/command_interface.dart';
import 'package:Strategy_design/behavioral/command/models/door_model.dart';

class LockDoor implements CommandInterface {
  final DoorModel door;

  LockDoor(DoorModel doorModel) : this.door = doorModel;

  @override
  void execute() {
    door.lockDoor();
  }
}
