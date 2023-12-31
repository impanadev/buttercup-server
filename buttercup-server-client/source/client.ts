import { getDirectoryContents } from "./requests/getDirectoryContents.js";
import { getFileContents } from "./requests/getFileContents.js";
import { putFileContents } from "./requests/putFileContents.js";
import { FileIdentifier, FileItem, PathIdentifier } from "./types.js";

export class ButtercupServerClient {
    uuid: string;
    url: string;

    constructor(databaseURL: string, token: string) {
        this.uuid = this.getUID(token);
        this.url = databaseURL;
    }

    getUID(jwt) {
        var p = jwt.split(".")[1];
        return JSON.parse(atob(this.base64UrlToBase64(p))).uid;
    }

    private base64UrlToBase64(base64Url) {
        if (base64Url === null) return;
        let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        while (base64.length % 4) {
            base64 += '=';
        }
        return base64;
    }

    async getDirectoryContent(pathIdentifier?: PathIdentifier):
        Promise<Array<FileItem>> {
        return getDirectoryContents({
            databaseURL: this.url,
            databaseUUID: this.uuid,
            pathIdentifier
        });
    }

    async getFileContents(pathIdentifier?: PathIdentifier): Promise<FileIdentifier> {
        return getFileContents({
            databaseURL: this.url,
            databaseUUID: this.uuid,
            pathIdentifier 
        });
    }

    async putFileContents(fileIdentifier: string, encryptedData: string | Buffer) {
        return putFileContents({
            databaseURL: this.url,
            databaseUUID: this.uuid,
            encryptedData,
            fileIdentifier
        });
    }

}