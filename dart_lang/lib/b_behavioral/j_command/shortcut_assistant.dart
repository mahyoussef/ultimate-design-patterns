import 'package:dart_lang/b_behavioral/j_command/command_interface.dart';

class ShortCutAssistant {
  final Map<String, CommandInterface> commands = {};
  void excute(CommandInterface command) {
    command.execute();
  }

  void setCommand(String shortcutCommandName, CommandInterface command) {
    print('Shortcut Assistant: $shortcutCommandName');
    commands[shortcutCommandName] = command;
  }

  void openShortCut(String shortcutCommandName) {
    commands[shortcutCommandName]!.execute();
  }
}
