import 'package:dart_lang/b_behavioral/j_command/command_interface.dart';

class SmartHomeMobileApp {
  void excute(CommandInterface command) {
    command.execute();
  }
}
