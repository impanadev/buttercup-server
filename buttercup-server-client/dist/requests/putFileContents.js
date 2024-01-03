import https from "https";
const axios = require("axios");
export async function putFileContents(options) {
    console.log("Buttercupclient putFileContents.ts check" + JSON.stringify(options));
    const httpsAgent = new https.Agent({ rejectUnauthorized: false });
    const jsonData = {
        tideUID: options.databaseUUID,
        vaultName: options.fileIdentifier,
        vaultData: options.encryptedData
    };
    axios
        .get(options.databaseURL + "api/UserDatas/" + options.databaseUUID, { httpsAgent })
        .then(response => {
        if (response.status == 200 || response.status == 201) {
            axios
                .put(options.databaseURL + "api/UserDatas/" + options.databaseUUID, jsonData, {
                httpsAgent
            })
                .catch(error => {
                throw new Error("Put Error Occured: " + String(error));
            });
        }
    })
        .catch((error) => {
        if (error.response.status == 404) {
            axios
                .post(options.databaseURL + "api/UserDatas/", jsonData, {
                httpsAgent
            })
                .catch(error => {
                throw new Error("Post Error Occured: " + String(error));
            });
        }
    });
    return new Promise((resolve, reject) => {
        resolve(JSON.stringify(jsonData));
    });
}
