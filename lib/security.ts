import crypto from "crypto-js";
import { v4 as uuidv4 } from "uuid";

import { reverseString } from "./utils";

export const generateUserKey = () => uuidv4().slice(0, 32);
const generateIv = (email: string) => reverseString(email.repeat(6).slice(0, 32));

export function encryptText(dreamtext: string, email?: string | null, key?: string): string {
    if (!email || !key) {
        throw Error("Unable to validate your credentials");
    }
    const iv = crypto.enc.Hex.parse(generateIv(email));
    return crypto.AES.encrypt(dreamtext, key, { iv }).toString();
}

export function decryptText(hiddentext: string, email?: string | null, key?: string): string {
    if (!email || !key) {
        throw Error("Unable to validate your credentials");
    }
    console.log(email);
    console.log(key);
    const iv = crypto.enc.Hex.parse(generateIv(email));
    return crypto.AES.decrypt(hiddentext, key, { iv }).toString(crypto.enc.Utf8);
}
