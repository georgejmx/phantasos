import crypto from "crypto-js";

import { reverseString } from "./utils";

export function encryptText(dreamtext: string, email?: string | null): string {
    if (!email) {
        throw Error("Unable to validate your credentials");
    }
    const expandedEmail = email.repeat(6).slice(0, 32);
    const userKey = crypto.enc.Hex.parse(expandedEmail);
    const iv = crypto.enc.Hex.parse(reverseString(expandedEmail));
    return crypto.AES.encrypt(dreamtext, userKey, { iv }).toString();
}

export function decryptText(hiddentext: string, email?: string | null): string {
    if (!email) {
        throw Error("Unable to validate your credentials");
    }
    const expandedEmail = email.repeat(6).slice(0, 32);
    const userKey = crypto.enc.Hex.parse(expandedEmail);
    const iv = crypto.enc.Hex.parse(reverseString(expandedEmail));
    return crypto.AES.decrypt(hiddentext, userKey, { iv }).toString(crypto.enc.Utf8);
}
