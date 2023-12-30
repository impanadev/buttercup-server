export type Identifier = string | number;
export interface PathIdentifier {
    identifier: Identifier;
    name: string;
}
export interface FileIdentifier {
    identifier: Identifier | null;
    name: string;
}
export interface FileItem {
    identifier: Identifier;
    name: string;
    type: "file" | "directory";
    size: number;
    mime?: string;
    created?: string;
    modified?: string;
    parent?: PathIdentifier;
}
export declare class ButtercupServerClient {
    getDirectoryContent(databaseURL: string, databaseUUID: string, pathIdentifier?: PathIdentifier): Promise<Array<FileItem>>;
    getFileContents(databaseURL: string, databaseUUID: string, pathIdentifier: PathIdentifier): Promise<string>;
    putFileContents(databaseURL: string, databaseUUID: string, parentPathIdentifier: PathIdentifier, fileIdentifier: FileIdentifier, data: string): Promise<FileIdentifier>;
}
