import 'package:dart_lang/b_behavioral/j_command/command_interface.dart';
import 'package:dart_lang/b_behavioral/j_command/models/tv_model.dart';

class TurnOnTv implements CommandInterface {
  final TvModel tv;

  TurnOnTv(TvModel tvModel) : this.tv = tvModel;

  @override
  void execute() {
    tv.turnOnTv();
  }
}
