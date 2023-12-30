import https from "https";
const axios = require("axios");
export async function getFileContents(options) {
    const httpsAgent = new https.Agent({ rejectUnauthorized: false });
    return new Promise((resolve, reject) => {
        axios
            .get(options.databaseURL + "api/UserDatas/" + options.databaseUUID, { httpsAgent })
            .then(response => {
            console.log(response);
            console.log("Getting File Data!");
            if (response.status == 200 || response.status == 201) {
                const data = response.data;
                resolve(data.vaultData);
            }
        })
            .catch(error => {
            reject("Error Occured: " + String(error));
        });
    });
}
