import os from 'os';

type Runner = 'ubuntu-24.04' |'windows-2025' |'ubuntu-24.04-arm' |'macos-13' |'macos-15'

const runner = process.env.RUNNER as Runner;
const inDocker = process.env.DOCKER === 'true';
const jobIndex = Number(process.env.JOB_INDEX || 0) + 1;
const platformAgnostic = process.env.PLATFORM_AGNOSTIC !== 'false';
export const comparator = (process.env.COMPARATOR && process.env.COMPARATOR !== 'null') ? process.env.COMPARATOR : null;

export const platform = os.platform();
export const arch = os.arch();
export const platformArch = `${platform}/${arch}`

export const testTags = [
  `@${platform}`,
  `@${arch}`,
  `@comparator:${comparator || 'default' }`,
  ...(runner ? [`@${runner}`] : []),
  ...(inDocker ? ['@docker'] : []),
]

export const reportOutputFile = `e2e/reports/blob-report-${inDocker ? 'docker-' : ''}${comparator ? `${comparator}-` : ''}${jobIndex}.zip`

const platformPath = platformAgnostic ? '' : '-{platform}'
const hostDir = inDocker ? 'docker' : 'host';

const basePathTemplate = `{snapshotDir}/{testFilePath}/{testName}-{projectName}${platformPath}{ext}`
export const pathTemplate = !runner ? basePathTemplate :
  `e2e/runner-screenshots/${hostDir}/${runner}/{testFilePath}/{testName}-{projectName}{ext}`;
