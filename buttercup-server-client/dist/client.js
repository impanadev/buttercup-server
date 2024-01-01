import { isUndefined } from "util";
import { getDirectoryContents } from "./requests/getDirectoryContents.js";
import { getFileContents } from "./requests/getFileContents.js";
import { putFileContents } from "./requests/putFileContents.js";
export class ButtercupServerClient {
    constructor(databaseURL, token) {
        if (isUndefined(token)) {
            throw new Error("Token is undefined");
        }
        else {
            console.log("Token: ", token);
        }
        this.uuid = this.getUID(token);
        this.url = databaseURL;
    }
    getUID(jwt) {
        var p = jwt.split(".")[1];
        return JSON.parse(atob(this.base64UrlToBase64(p))).uid;
    }
    base64UrlToBase64(base64Url) {
        if (base64Url === null)
            return;
        let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        while (base64.length % 4) {
            base64 += '=';
        }
        return base64;
    }
    async getDirectoryContent(pathIdentifier) {
        return getDirectoryContents({
            databaseURL: this.url,
            databaseUUID: this.uuid,
            pathIdentifier
        });
    }
    async getFileContents(pathIdentifier) {
        return getFileContents({
            databaseURL: this.url,
            databaseUUID: this.uuid,
            pathIdentifier
        });
    }
    async putFileContents(fileIdentifier, encryptedData) {
        return putFileContents({
            databaseURL: this.url,
            databaseUUID: this.uuid,
            encryptedData,
            fileIdentifier
        });
    }
}
