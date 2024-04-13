import 'package:dart_lang/behavioral/command/command_interface.dart';
import 'package:dart_lang/behavioral/command/smart_home_application.dart';

class SmartHomeMobileApp {
  void excute(CommandInterface command) {
    command.execute();
  }
}
