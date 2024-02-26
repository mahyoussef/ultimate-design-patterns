import { Authentication } from "./Authentication";

export class UsernamePasswordAuthentication implements Authentication {
    authenticate(): void {
        console.log("Performing username/password authentication.");
    }
}