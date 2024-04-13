import 'package:dart_lang/b_behavioral/j_command/command_interface.dart';
import 'package:dart_lang/b_behavioral/j_command/models/light_model.dart';

class TurnOnLight implements CommandInterface {
  final LightModel light;

  TurnOnLight(LightModel lightModel) : this.light = lightModel;

  @override
  void execute() {
    light.turnOn();
  }
}
