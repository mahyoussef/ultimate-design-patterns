interface Authentication {
    authenticate(): void;
}

interface AuthenticationFactory {
    createAuthentication(): Authentication;
}

class SocialMediaAuthentication implements Authentication {
    authenticate(): void {
        console.log("Performing social media authentication.");
    }
}

class SocialMediaAuthFactory implements AuthenticationFactory {
    createAuthentication(): Authentication {
        return new SocialMediaAuthentication();
    }
}

class TwoFactorAuthentication implements Authentication {
    authenticate(): void {
        console.log("Performing two-factor authentication.");
    }
}

class TwoFactorAuthFactory implements AuthenticationFactory {
    createAuthentication(): Authentication {
        return new TwoFactorAuthentication();
    }
}

class UsernamePasswordAuthentication implements Authentication {
    authenticate(): void {
        console.log("Performing username/password authentication.");
    }
}

class UsernamePasswordAuthFactory implements AuthenticationFactory {
    createAuthentication(): Authentication {
        return new UsernamePasswordAuthentication();
    }
}
// Create an instance of the authentication factories
const socialMediaAuthFactory: AuthenticationFactory = new SocialMediaAuthFactory();
const twoFactorAuthFactory: AuthenticationFactory = new TwoFactorAuthFactory();
const usernamePasswordAuthFactory: AuthenticationFactory = new UsernamePasswordAuthFactory();

// Create instances of authentication using the factories
const socialMediaAuthentication: Authentication = socialMediaAuthFactory.createAuthentication();
const twoFactorAuthentication: Authentication = twoFactorAuthFactory.createAuthentication();
const usernamePasswordAuthentication: Authentication = usernamePasswordAuthFactory.createAuthentication();

// Perform authentication
socialMediaAuthentication.authenticate();
twoFactorAuthentication.authenticate();
usernamePasswordAuthentication.authenticate();
