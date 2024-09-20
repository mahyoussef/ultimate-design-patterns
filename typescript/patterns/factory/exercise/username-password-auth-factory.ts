import { Authentication } from "./Authentication";
import { AuthenticationFactory } from "./authentication-factory";
import { UsernamePasswordAuthentication } from "./username-password-authentication";

export class UsernamePasswordAuthFactory implements AuthenticationFactory {
    createAuthentication(): Authentication {
        return new UsernamePasswordAuthentication();
    }
}