import { getDirectoryContents } from "./requests/getDirectoryContents.js";
import { getFileContents } from "./requests/getFileContents.js";
import { putFileContents } from "./requests/putFileContents.js";
export class ButtercupServerClient {
    async getDirectoryContent(databaseURL, databaseUUID, pathIdentifier) {
        return getDirectoryContents({
            databaseURL,
            databaseUUID,
            pathIdentifier
        });
    }
    async getFileContents(databaseURL, databaseUUID, pathIdentifier) {
        return getFileContents({
            databaseURL, databaseUUID, pathIdentifier
        });
    }
    async putFileContents(databaseURL, databaseUUID, parentPathIdentifier, fileIdentifier, data) {
        return putFileContents({
            databaseURL, databaseUUID, parentPathIdentifier, fileIdentifier, data
        });
    }
}
