import https from "https";
import { FileItem, PathIdentifier } from "../types.js";
const axios = require("axios");


export interface InternalGetDirectoryContentsOptions {
    databaseURL: string;
    databaseUUID: string;
    pathIdentifier?: PathIdentifier;
}

export async function getDirectoryContents(options: InternalGetDirectoryContentsOptions): Promise<Array<FileItem>> {
    const httpsAgent = new https.Agent({ rejectUnauthorized: false });
    return new Promise<Array<FileItem>>((resolve, reject) => {
        axios
            .get(options.databaseURL + "api/UserDatas/" + options.databaseUUID, { httpsAgent })
            .then(response => {
                if (response.status == 200 || response.status == 201) {
                    const data = response.data;
                    resolve([
                        {
                            identifier: data.vaultName + ".bcup",
                            name: data.vaultName + ".bcup",
                            type: "file",
                            size: data.vaultData.length
                        } as FileItem
                    ]);
                }
            })
            .catch(error => {
                console.log("Error: " + error.message);
                if (error.response.status == 404) {
                    resolve([]);
                }
                reject("Error Occured: " + String(error));
            });
    });
}