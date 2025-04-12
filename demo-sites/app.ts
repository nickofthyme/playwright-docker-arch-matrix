import express from 'express';
import path from 'path';
import { createProxyMiddleware } from 'http-proxy-middleware';
import { port, baseURL, playwrightDev, simpleReactApp } from './constants';

const app = express();

// Serve playwright.dev static files
app.use(playwrightDev.basePath, express.static(path.join(__dirname, playwrightDev.basePath)));
app.get(RegExp(`${playwrightDev.basePath}(.*)`), (req, res) => {
  res.sendFile(path.join(__dirname, playwrightDev.basePath, 'index.html'));
});

// Serve local react app via proxy
app.use(
  simpleReactApp.basePath,
  createProxyMiddleware({
    target: 'http://localhost:5173/simple-react-app/',
    changeOrigin: true,
  })
);

// Main menu of available apps
app.get('/', (req, res) => {
  res.send(`
    <h1>Demo Apps</h1>
    <ul>
      <li><a href="${playwrightDev.basePath}">Go to playwright.dev mock</a></li>
      <li><a href="${simpleReactApp.basePath}">Go to Simple React App</a></li>
    </ul>
  `);
});

// start server
app.listen(port, () => {
  console.log(`Server running at ${baseURL}`);
});
