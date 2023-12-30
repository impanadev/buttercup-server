import { FileIdentifier, PathIdentifier } from "../client";
export interface InternalPutFileContentsOptions {
    databaseURL: string;
    databaseUUID: string;
    parentPathIdentifier: PathIdentifier;
    fileIdentifier: FileIdentifier;
    data: string;
}
export declare function putFileContents(options: InternalPutFileContentsOptions): Promise<FileIdentifier>;
