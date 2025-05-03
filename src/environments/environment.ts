export const environment = {
    production: false,
    msalConfig: {
        auth: {
            clientId: 'c07f455e-b314-4a5b-aeeb-ede820ce8c46',
            authority: 'https://login.microsoftonline.com/common'
        }
    },
    apiConfig: {
        scopes: ['user.read'],
        uri: 'https://graph.microsoft.com/v1.0/me'
    }
};
