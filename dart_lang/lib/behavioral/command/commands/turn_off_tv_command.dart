import 'package:Strategy_design/behavioral/command/command_interface.dart';
import 'package:Strategy_design/behavioral/command/models/tv_model.dart';

class TurnOffTv implements CommandInterface {
  final TvModel tv;

  TurnOffTv(TvModel tvModel) : this.tv = tvModel;

  @override
  void execute() {
    tv.turnOffTv();
  }
}
