export interface InternalPutFileContentsOptions {
    databaseURL: string;
    databaseUUID: string;
    fileIdentifier: string;
    encryptedData: string;
}
export declare function putFileContents(options: InternalPutFileContentsOptions): Promise<string>;
