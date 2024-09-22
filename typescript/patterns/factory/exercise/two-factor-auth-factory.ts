import { Authentication } from "./Authentication";
import { AuthenticationFactory } from "./authentication-factory";
import { TwoFactorAuthentication } from "./two-factor-authentication";

export class TwoFactorAuthFactory implements AuthenticationFactory {
    createAuthentication(): Authentication {
        return new TwoFactorAuthentication();
    }
}