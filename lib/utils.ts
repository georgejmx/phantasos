const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

export function isValidEmail(input: string): boolean {
    return EMAIL_REGEX.test(input);
}

export function isValidPassword(input: string): boolean {
    return PASSWORD_REGEX.test(input);
}

export function parseDate(date: Date): string {
    return date.toUTCString().split(" ").slice(0, 4).join(" ");
}

export function reverseString(str: string): string {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
