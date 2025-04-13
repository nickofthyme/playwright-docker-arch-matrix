import os from 'os';

const runner = process.env.RUNNER;
const inDocker = process.env.DOCKER === 'true';

export const platform = os.platform();
export const arch = os.arch();
export const platformArch = `${platform}/${arch}`

export const testTags = [
  `@${platformArch}`,
  ...(runner ? [`@${runner}`] : []),
  ...(inDocker ? ['@docker'] : []),
]
