import { SocialMediaAuthFactory } from "./social-media-auth-factory";
import { TwoFactorAuthFactory } from "./two-factor-auth-factory";
import { UsernamePasswordAuthFactory } from "./username-password-auth-factory";
import type { Authentication } from "./Authentication";
import type { AuthenticationFactory } from "./authentication-factory";

// Create an instance of the authentication factories
const socialMediaAuthFactory: AuthenticationFactory =
  new SocialMediaAuthFactory();
const twoFactorAuthFactory: AuthenticationFactory = new TwoFactorAuthFactory();
const usernamePasswordAuthFactory: AuthenticationFactory =
  new UsernamePasswordAuthFactory();

// Create instances of authentication using the factories
const socialMediaAuthentication: Authentication =
  socialMediaAuthFactory.createAuthentication();
const twoFactorAuthentication: Authentication =
  twoFactorAuthFactory.createAuthentication();
const usernamePasswordAuthentication: Authentication =
  usernamePasswordAuthFactory.createAuthentication();

// Perform authentication
socialMediaAuthentication.authenticate();
twoFactorAuthentication.authenticate();
usernamePasswordAuthentication.authenticate();
