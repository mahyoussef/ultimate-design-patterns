class Door {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  lock(): void {
    console.log(`Locking Door ${this.name}...`);
  }

  unlock(): void {
    console.log(`Unlocking Door ${this.name}...`);
  }

  getName(): string {
    return this.name;
  }
}

class Light {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  turnOn(): void {
    console.log(`Turning on Light ${this.name}...`);
  }

  turnOff(): void {
    console.log(`Turning off Light ${this.name}...`);
  }

  getName(): string {
    return this.name;
  }
}

class Tv {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  turnOn(): void {
    console.log(`Turning on TV ${this.name}...`);
  }

  turnOff(): void {
    console.log(`Turning off TV ${this.name}...`);
  }

  getName(): string {
    return this.name;
  }
}

// #####################################

interface Command {
  execute(): void;
}

class TurnOnLightCommand implements Command {
  private light: Light;
  constructor(light: Light) {
    this.light = light;
  }
  execute(): void {
    this.light.turnOn();
  }
}

class TurnOffLightCommand implements Command {
  private light: Light;
  constructor(light: Light) {
    this.light = light;
  }
  execute(): void {
    this.light.turnOff();
  }
}

class TurnOnTvCommand implements Command {
  private tv: Tv;
  constructor(tv: Tv) {
    this.tv = tv;
  }
  execute(): void {
    this.tv.turnOn();
  }
}

class TurnOffTvCommand implements Command {
  private tv: Tv;
  constructor(tv: Tv) {
    this.tv = tv;
  }
  execute(): void {
    this.tv.turnOff();
  }
}

class LockDoorCommand implements Command {
  private door: Door;
  constructor(door: Door) {
    this.door = door;
  }
  execute(): void {
    this.door.lock();
  }
}

class UnlockDoorCommand implements Command {
  private door: Door;
  constructor(door: Door) {
    this.door = door;
  }
  execute(): void {
    this.door.unlock();
  }
}

// #####################################

class SmartHomeVoiceAssistant {
  private commands: Map<string, Command>;

  constructor() {
    this.commands = new Map<string, Command>();
  }

  say(talkingCommand: string): void {
    this.commands.get(talkingCommand)?.execute();
  }

  setCommand(talkingCommand: string, command: Command): void {
    this.commands.set(talkingCommand, command);
  }
}

class SmartHomeShortcut {
  private commands: Map<string, Command>;
  constructor() {
    this.commands = new Map<string, Command>();
  }

  openShortcut(shortcut: string): void {
    this.commands.get(shortcut)?.execute();
  }

  setCommand(shortcutCommand: string, command: Command): void {
    this.commands.set(shortcutCommand, command);
  }
}

class SmartHomeMobileApp {
  execute(command: Command) {
    command.execute();
  }
}

// Example usage

const frontDoor = new Door("Front Door");
const livingRoomLight = new Light("Living room Light");
const LgTv = new Tv("LG TV");

const smartHomeMobileApp = new SmartHomeMobileApp();
smartHomeMobileApp.execute(new TurnOnLightCommand(livingRoomLight));
smartHomeMobileApp.execute(new TurnOffTvCommand(LgTv));
smartHomeMobileApp.execute(new UnlockDoorCommand(frontDoor));

const smartHomeShortcut = new SmartHomeShortcut();
smartHomeShortcut.setCommand(
  "TURN OFF LIGHT",
  new TurnOffLightCommand(livingRoomLight),
);
smartHomeShortcut.setCommand("TURN ON TV", new TurnOnTvCommand(LgTv));
smartHomeShortcut.setCommand("LOCK DOOR", new LockDoorCommand(frontDoor));

smartHomeShortcut.openShortcut("TURN OFF LIGHT");
smartHomeShortcut.openShortcut("TURN ON TV");
smartHomeShortcut.openShortcut("LOCK DOOR");
