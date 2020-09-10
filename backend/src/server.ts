/**
 * Starts the application on the port specified.
 */
require('dotenv').config();
import fs from 'fs';
import http from 'http';
import https from 'https';
import app from './api';

let PORT = process.env.PORT || 8080;
const appEnv = process.env.APP_ENVIRONMENT;
const httpServer = http.createServer(app);
let server = httpServer;
if(appEnv === 'production') {
  const key = process.env.CERT_KEY || './server.key';
  const cert = process.env.CERT_URL || './server.crt';
  const privateKey  = fs.readFileSync(key, 'utf8');
  const certificate = fs.readFileSync(cert, 'utf8');
  const credentials = {key: privateKey, cert: certificate};
  const httpsServer = https.createServer(credentials, app);
  server = httpsServer;
}
server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
