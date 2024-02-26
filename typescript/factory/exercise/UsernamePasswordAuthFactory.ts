import { Authentication } from "./Authentication";
import { AuthenticationFactory } from "./AuthenticationFactory";
import { UsernamePasswordAuthentication } from "./UsernamePasswordAuthentication";

export class UsernamePasswordAuthFactory implements AuthenticationFactory {
    createAuthentication(): Authentication {
        return new UsernamePasswordAuthentication();
    }
}