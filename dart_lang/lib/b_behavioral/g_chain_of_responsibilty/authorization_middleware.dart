import 'package:dart_lang/b_behavioral/g_chain_of_responsibilty/abstract_middleware_handler.dart';
import 'package:dart_lang/b_behavioral/g_chain_of_responsibilty/model/request_model.dart';

class AutharizationHandler extends AbstractMidlleWareHandler {
  @override
  bool handle(REquest request) {
    if (!request.isAuthorized) {
      print('request has nooooot  AutharizationHandler');
      return false;
    } else {
      print('request has  been AutharizationHandler');
      super.handle(request);
      return true;
    }
  }
}
