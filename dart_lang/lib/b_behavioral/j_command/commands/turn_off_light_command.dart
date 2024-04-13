import 'package:dart_lang/b_behavioral/j_command/command_interface.dart';
import 'package:dart_lang/b_behavioral/j_command/models/light_model.dart';

class TurnOffLight implements CommandInterface {
  final LightModel light;

  TurnOffLight(LightModel lightModel) : this.light = lightModel;

  @override
  void execute() {
    light.turnOff();
  }
}
