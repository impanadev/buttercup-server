import { PathIdentifier } from "../client";
export interface InternalGetFileContentsOptions {
    databaseURL: string;
    databaseUUID: string;
    pathIdentifier: PathIdentifier;
}
export declare function getFileContents(options: InternalGetFileContentsOptions): Promise<string>;
