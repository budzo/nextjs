import graphqlRequest from "./graphqlRequest";

export async function getInfo() {
    const query = {
        query: `query getInfo {
            allSettings {
                generalSettingsDescription
                generalSettingsTitle
            }
          }`
    };

    const resJson = await graphqlRequest(query);
    const info = resJson.data.allSettings;
    return info;
}