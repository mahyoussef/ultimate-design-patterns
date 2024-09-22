import { Authentication } from "./Authentication";
import { AuthenticationFactory } from "./authentication-factory";
import { SocialMediaAuthentication } from "./social-media-authentication";

export class SocialMediaAuthFactory implements AuthenticationFactory {
    createAuthentication(): Authentication {
        return new SocialMediaAuthentication();
    }
}