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

const jobIndex = Number(process.env.JOB_INDEX) + 1;
export const reportOutputFile = `e2e/reports/blob-report-${inDocker ? 'docker-' : ''}${jobIndex}.zip`
