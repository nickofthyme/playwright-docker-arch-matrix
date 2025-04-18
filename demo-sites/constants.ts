let env: any = {}

try {
  // @ts-ignore
  env = process.env // node env
} catch (error) {
  // @ts-ignore
  env = import.meta.env; // vite env
}

export const host = env.HOST || '127.0.0.1'
export const port = 3000

export const simpleReactApp = {
  proxyPort: 5173,
  basePath: '/simple-react-app',
};

export const playwrightDev = {
  basePath: '/playwright-dev',
};

export const baseURL = `http://${host}:${port}`
