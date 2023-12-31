import https from "https";
const axios = require("axios");
export async function putFileContents(options) {
    const httpsAgent = new https.Agent({ rejectUnauthorized: false });
    const jsonData = {
        tideUID: options.databaseUUID,
        vaultName: options.fileIdentifier,
        vaultData: options.encryptedData
    };
    return new Promise((resolve, reject) => {
        axios
            .put(options.databaseURL + "api/UserDatas/" + options.databaseUUID, jsonData, {
            httpsAgent
        })
            .catch(error => {
            reject("Error Occured: " + String(error));
        });
        resolve("Success");
    });
}
