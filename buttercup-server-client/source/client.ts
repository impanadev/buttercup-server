import { getDirectoryContents } from "./requests/getDirectoryContents.js";
import { getFileContents } from "./requests/getFileContents.js";
import { putFileContents } from "./requests/putFileContents.js";

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

export class ButtercupServerClient {

    async getDirectoryContent(
        databaseURL: string, databaseUUID: string, pathIdentifier?: PathIdentifier):
        Promise<Array<FileItem>> {
        return getDirectoryContents({
            databaseURL,
            databaseUUID,
            pathIdentifier
        });
    }

    async getFileContents(databaseURL: string,
        databaseUUID: string,
        pathIdentifier: PathIdentifier): Promise<string> {
        return getFileContents({
            databaseURL, databaseUUID, pathIdentifier
        });
    }

    async putFileContents(databaseURL: string,
        databaseUUID: string,
        parentPathIdentifier: PathIdentifier,
        fileIdentifier: FileIdentifier,
        data: string) {
        return putFileContents({
            databaseURL, databaseUUID, parentPathIdentifier, fileIdentifier, data
        });
    }
}