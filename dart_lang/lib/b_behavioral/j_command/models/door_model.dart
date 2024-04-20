class DoorModel {
  String name;
  DoorModel(this.name);
  void lockDoor() {
    print('$name is locked');
  }

  void unlockDoor() {
    print('$name is unlocked');
  }
}
