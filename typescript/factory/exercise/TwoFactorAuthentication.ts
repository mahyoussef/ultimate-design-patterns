import { Authentication } from "./Authentication";

export class TwoFactorAuthentication implements Authentication {
    authenticate(): void {
        console.log("Performing two-factor authentication.");
    }
}