import { Authentication } from "./Authentication";

export interface AuthenticationFactory {
    createAuthentication(): Authentication;
}
