import https from "https";
import { FileIdentifier, PathIdentifier } from "../types.js";
const axios = require("axios");

export interface InternalPutFileContentsOptions {
    databaseURL: string;
    databaseUUID: string;
    fileIdentifier: string;
    encryptedData: string;
}

export async function putFileContents(options: InternalPutFileContentsOptions): Promise<string> {
    const httpsAgent = new https.Agent({ rejectUnauthorized: false });
    const jsonData = {
        tideUID: options.databaseUUID,
        vaultName: options.fileIdentifier,
        vaultData: options.encryptedData
    };
    return new Promise<string>((resolve, reject) => {
        axios
            .put(options.databaseURL + "api/UserDatas/" + options.databaseUUID, jsonData, {
                httpsAgent
            })
            .catch(error => {
                reject("Error Occured: " + String(error));
            });
        resolve(jsonData.vaultData);
    });
}