import { FileItem, PathIdentifier } from "./types.js";
export declare class ButtercupServerClient {
    uuid: string;
    url: string;
    constructor(databaseURL: string, token: string);
    getUID(jwt: any): any;
    private base64UrlToBase64;
    getDirectoryContent(pathIdentifier?: PathIdentifier): Promise<Array<FileItem>>;
    getFileContents(pathIdentifier?: PathIdentifier): Promise<string>;
    putFileContents(fileIdentifier: string, encryptedData: string): Promise<string>;
}
