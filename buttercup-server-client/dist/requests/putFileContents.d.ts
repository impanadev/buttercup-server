import { FileIdentifier, PathIdentifier } from "../types.js";
export interface InternalPutFileContentsOptions {
    databaseURL: string;
    databaseUUID: string;
    parentPathIdentifier: PathIdentifier;
    fileIdentifier: FileIdentifier;
    data: string;
}
export declare function putFileContents(options: InternalPutFileContentsOptions): Promise<FileIdentifier>;
