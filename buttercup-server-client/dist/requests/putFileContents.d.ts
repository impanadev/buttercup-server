/// <reference types="node" />
export interface InternalPutFileContentsOptions {
    databaseURL: string;
    databaseUUID: string;
    fileIdentifier: string;
    encryptedData: string | Buffer;
}
export declare function putFileContents(options: InternalPutFileContentsOptions): Promise<string>;
