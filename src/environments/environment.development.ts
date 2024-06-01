require('dotenv').config()

export const environment = {
    production: false,
    apiUrl: process.env['apiUrl'],
    apiKey: process.env['apiKey']
};
