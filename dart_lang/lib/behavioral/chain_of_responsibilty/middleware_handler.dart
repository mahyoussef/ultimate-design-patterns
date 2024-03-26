import 'package:Strategy_design/behavioral/chain_of_responsibilty/middleWare_reponse.dart';
import 'package:Strategy_design/behavioral/chain_of_responsibilty/model/request_model.dart';

abstract class MiddleWareHandler {
  MiddleWareHandler setNex(MiddleWareHandler handler);
  bool handle(REquest request);
}
