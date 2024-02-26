import { Authentication } from "./Authentication";
import { AuthenticationFactory } from "./AuthenticationFactory";
import { TwoFactorAuthentication } from "./TwoFactorAuthentication";

export class TwoFactorAuthFactory implements AuthenticationFactory {
    createAuthentication(): Authentication {
        return new TwoFactorAuthentication();
    }
}