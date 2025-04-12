let env: any = {}

try {
  env = process.env // node env
} catch (error) {
  env = import.meta.env; // vite env
}

export const host = env.HOST || 'localhost'
export const port = 3000

export const simpleReactApp = {
  proxyPort: 5173,
  basePath: '/simple-react-app',
};

export const playwrightDev = {
  basePath: '/playwright-dev',
};

export const baseURL = `http://${host}:${port}`
