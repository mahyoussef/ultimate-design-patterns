import { Authentication } from "./Authentication";
import { AuthenticationFactory } from "./AuthenticationFactory";
import { SocialMediaAuthentication } from "./SocialMediaAuthentication";

export class SocialMediaAuthFactory implements AuthenticationFactory {
    createAuthentication(): Authentication {
        return new SocialMediaAuthentication();
    }
}