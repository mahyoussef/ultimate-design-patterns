import 'package:Strategy_design/behavioral/command/command_interface.dart';
import 'package:Strategy_design/behavioral/command/smart_home_application.dart';

class SmartHomeMobileApp {
  void excute(CommandInterface command) {
    command.execute();
  }
}
