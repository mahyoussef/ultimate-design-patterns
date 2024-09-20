import { Authentication } from "./Authentication";

export class SocialMediaAuthentication implements Authentication {
    authenticate(): void {
        console.log("Performing social media authentication.");
    }
}
