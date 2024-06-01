const replace = require('replace-in-file');
const apiUrl = process.env.API_URL;
const apiKey = process.env.API_KEY;

const options = {
  files: './src/environments/environment.prod.ts',
  from: [/apiUrl: 'API_URL'/g, /apiKey: 'API_KEY'/g],
  to: [`apiUrl: '${apiUrl}'`, `apiKey: '${apiKey}'`],
};

try {
  let changedFiles = replace.sync(options);
  if (changedFiles == 0) {
    throw "Please make sure that file '" + options.files + "' has \"apiUrl: 'API_URL'\" & \"apiKey: 'API_KEY'\"";
  }
  console.log('Build version set: ' + apiUrl);
}
catch (error) {
  console.error('Error occurred:', error);
  throw error
}