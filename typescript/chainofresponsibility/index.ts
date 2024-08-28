import {AuthenticationMiddlewareHandler} from "./authentication-middleware-handler";
import {AuthorizationMiddlewareHandler} from "./authorization-middleware-handler";
import {ChainRequest} from "./request";
import {RequestProcessor} from "./request-processor";
import {SecurityChecksMiddlewareHandler} from "./securityChecks-middleware-handler";

let authentication = new AuthenticationMiddlewareHandler();
let authorization = new AuthorizationMiddlewareHandler();
let securityChecks = new SecurityChecksMiddlewareHandler();
authentication.setNext(authorization);
authorization.setNext(securityChecks);

let newRequest: ChainRequest = {
  type: "GET",
  isAuthenticated: true,
  isAuthorized: true,
  isHasPassedSecurityChecks: true,
};

let requestProcessor = new RequestProcessor(authentication);
let response = requestProcessor.processRequest(newRequest);
console.log(response);
