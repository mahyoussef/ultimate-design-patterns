import 'package:dart_lang/behavioral/command/command_interface.dart';

class SmartHomeMobileApp {
  void excute(CommandInterface command) {
    command.execute();
  }
}
