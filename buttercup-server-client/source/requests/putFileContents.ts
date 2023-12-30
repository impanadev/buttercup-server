import https from "https";
import { FileIdentifier, PathIdentifier } from "../client";
const axios = require("axios");

export interface InternalPutFileContentsOptions {
    databaseURL: string;
    databaseUUID: string;
    parentPathIdentifier: PathIdentifier;
    fileIdentifier: FileIdentifier;
    data: string;
}

export async function putFileContents(options: InternalPutFileContentsOptions): Promise<FileIdentifier> {
    const httpsAgent = new https.Agent({ rejectUnauthorized: false });
    const jsonData = {
        tideUID: options.databaseUUID,
        vaultName: options.fileIdentifier.toString(),
        vaultData: options.data
    };
    return new Promise<FileIdentifier>((resolve, reject) => {
        axios
            .put(options.databaseURL + "api/UserDatas/" + options.databaseUUID, jsonData, {
                httpsAgent
            })
            .catch(error => {
                reject("Error Occured: " + String(error));
            });
        resolve(options.fileIdentifier);
    });
}