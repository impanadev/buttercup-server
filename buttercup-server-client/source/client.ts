import { getDirectoryContents } from "./requests/getDirectoryContents.js";
import { getFileContents } from "./requests/getFileContents.js";
import { putFileContents } from "./requests/putFileContents.js";
import { FileIdentifier, FileItem, PathIdentifier } from "./types.js";

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