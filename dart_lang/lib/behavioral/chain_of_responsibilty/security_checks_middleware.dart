import 'package:Strategy_design/behavioral/chain_of_responsibilty/abstract_middleware_handler.dart';
import 'package:Strategy_design/behavioral/chain_of_responsibilty/middleWare_reponse.dart';
import 'package:Strategy_design/behavioral/chain_of_responsibilty/model/request_model.dart';

class SecurityChecksHandler extends AbstractMidlleWareHandler {
  @override
  bool handle(REquest request) {
    if (!request.hasPassedSecurityChecks) {
      print('request has not been SecurityChecksHandler');
      return false;
    } else {
      print('request has been SecurityChecksHandler');
      super.handle(request);
      return true;
    }
  }
}
