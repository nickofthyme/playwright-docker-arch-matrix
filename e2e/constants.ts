import os from 'os';

const runner = process.env.RUNNER;

export const platform = os.platform();
export const arch = os.arch();
export const platformArch = `${platform}/${arch}`

export const testTags = [
  `@${platformArch}`,
  ...(runner ? [`@${runner}`] : []),
]
