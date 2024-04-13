import 'package:dart_lang/behavioral/chain_of_responsibilty/middleWare_reponse.dart';
import 'package:dart_lang/behavioral/chain_of_responsibilty/middleware_handler.dart';
import 'package:dart_lang/behavioral/chain_of_responsibilty/model/request_model.dart';

class RequestProcessor {
  final MiddleWareHandler middleWareHandler;
  RequestProcessor(this.middleWareHandler);
  MiddleWareResponse processRequest(REquest request) {
    if (!middleWareHandler.handle(request)) {
      return MiddleWareResponse(
          success: false, message: 'request has not been pass.');
    }
    return MiddleWareResponse(
        success: true, message: 'request has been passssssed');
  }
}
