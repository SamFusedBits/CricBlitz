require('dotenv').config()

export const environment = {
    production: true,
    apiUrl: process.env['apiUrl'], //This will send the request to the backendURL, stored as environment variable 
    apiKey: process.env['apiKey']    //This will get the api key stored as an environment variable
};