import 'package:dart_lang/b_behavioral/j_command/command_interface.dart';

class VoiceAssistant {
  final Map<String, CommandInterface> commands = {};
  void setCommand(String voiceCommandName, CommandInterface command) {
    commands[voiceCommandName] = command;
  }

  void openVoiceCommand(String voiceCommandName) {
    commands[voiceCommandName]!.execute();
  }

  void say(String voiceCommandName) {
    print('Voice Assistant: $voiceCommandName');
    commands[voiceCommandName]!.execute();
  }
}
