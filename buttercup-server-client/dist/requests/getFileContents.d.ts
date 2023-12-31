import { FileIdentifier, PathIdentifier } from "../types.js";
export interface InternalGetFileContentsOptions {
    databaseURL: string;
    databaseUUID: string;
    pathIdentifier?: PathIdentifier;
}
export declare function getFileContents(options: InternalGetFileContentsOptions): Promise<FileIdentifier>;
