import 'package:Strategy_design/behavioral/command/command_interface.dart';
import 'package:Strategy_design/behavioral/command/models/light_model.dart';

class TurnOffLight implements CommandInterface {
  final LightModel light;

  TurnOffLight(LightModel lightModel) : this.light = lightModel;

  @override
  void execute() {
    light.turnOff();
  }
}
