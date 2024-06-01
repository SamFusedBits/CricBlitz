import { sync } from 'replace-in-file';
const apiUrl = process.env.API_URL;
const apiKey = process.env.API_KEY;

const options = {
  files: ['./src/environments/environment.ts','./src/environments/environment.prod.ts', './src/environments/environment.development.ts', '.\src\app\pages\home\home.component.ts'],
  from: [/apiUrl: 'API_URL'/g, /apiKey: 'API_KEY'/g],
  to: [`apiUrl: '${apiUrl}'`, `apiKey: '${apiKey}'`],
};

try {
  let changedFiles = sync(options);
  console.log(`Changed files: ${changedFiles}`);
  if (changedFiles.length === 0) {
    throw "Please make sure that file '" + options.files + "' has \"apiUrl: 'API_URL'\" & \"apiKey: 'API_KEY'\"";
  }
} catch (error) {
  console.error('Error occurred:', error);
  throw error;
}