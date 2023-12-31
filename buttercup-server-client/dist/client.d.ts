import { FileIdentifier, FileItem, PathIdentifier } from "./types.js";
export declare class ButtercupServerClient {
    getDirectoryContent(databaseURL: string, databaseUUID: string, pathIdentifier?: PathIdentifier): Promise<Array<FileItem>>;
    getFileContents(databaseURL: string, databaseUUID: string, pathIdentifier: PathIdentifier): Promise<string>;
    putFileContents(databaseURL: string, databaseUUID: string, parentPathIdentifier: PathIdentifier, fileIdentifier: FileIdentifier, data: string): Promise<FileIdentifier>;
}
