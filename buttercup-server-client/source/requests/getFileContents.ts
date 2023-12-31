import https from "https";
import { FileIdentifier, PathIdentifier } from "../types.js";
const axios = require("axios");


export interface InternalGetFileContentsOptions {
    databaseURL: string;
    databaseUUID: string;
    pathIdentifier?: PathIdentifier
}

export async function getFileContents(options: InternalGetFileContentsOptions): Promise<FileIdentifier> {
    const httpsAgent = new https.Agent({ rejectUnauthorized: false });
    return new Promise<FileIdentifier>((resolve, reject) => {
        axios
            .get(options.databaseURL + "api/UserDatas/" + options.databaseUUID, { httpsAgent })
            .then(response => {
                console.log(response);
                console.log("Getting File Data!");
                if (response.status == 200 || response.status == 201) {
                    const data = response.data;
                    resolve({ identifier: "VaultData", name: data.vaultData as string } as FileIdentifier);
                }
            })
            .catch(error => {
                reject("Error Occured: " + String(error));
            });
    });
}