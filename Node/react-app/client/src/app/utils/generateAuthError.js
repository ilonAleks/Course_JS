export function generetaAuthError(message) {
    switch (message) {
        case "INVALID_PASSWORD":
            return "Email or password are introduced incorrectly";
        case "EMAIL_EXISTS":
            return "A user with such an email already exists";
        default:
            return "Too many attempts to enter.Try it later";
    }
}
