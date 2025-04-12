## Playwright docker architecture testing matrix

This repo is meant to test playwright screenshot testing on a multitude of UIs against a multitude of architectures. If uses GitHub actions to run all tests against their baselines.

UI cases
- Text - Variant in typography.
- Canvas - A simple scatter plot using `Chart.js` rendered to [`canvas`]().
- Icons - A wide range of SVG icons using heroicons.
- Image - A high resolution image ([sample image]()).

GitHub Runners

We are testing across multiple architecture types and operating systems. See [docs](https://docs.github.com/en/actions/using-github-hosted-runners/using-github-hosted-runners/about-github-hosted-runners#standard-github-hosted-runners-for-public-repositories) for complete list of GitHub runners. The ones used for testing are detailed below.

Workflow label | Virtual Machine | Processor (CPU) | Memory (RAM) | Storage (SSD) | Architecture
-- | -- | -- | -- | -- | --
[`ubuntu-24.04`](https://github.com/actions/runner-images/blob/main/images/ubuntu/Ubuntu2404-Readme.md) | Linux | 4 | 16 GB | 14 GB | x64
[`windows-2025`](https://github.com/actions/runner-images/blob/main/images/windows/Windows2025-Readme.md) | Windows | 4 | 16 GB | 14 GB | x64
[`ubuntu-24.04-arm`](https://github.com/actions/partner-runner-images/blob/main/images/arm-ubuntu-24-image.md) | Linux [Public preview] | 4 | 16 GB | 14 GB | arm64
[`macos-13`](https://github.com/actions/runner-images/blob/main/images/macos/macos-13-Readme.md) | macOS | 4 | 14 GB | 14 GB | Intel
[`macos-15`](https://github.com/actions/runner-images/blob/main/images/macos/macos-15-Readme.md) | macOS | 3 (M1) | 7 GB | 14 GB | arm64


## Playwright system requirements
- Latest version of Node.js 18, 20 or 22.
- Windows 10+, Windows Server 2016+ or Windows Subsystem for Linux (WSL).
- macOS 13 Ventura, or later.
- Debian 12, Ubuntu 22.04, Ubuntu 24.04, on x86-64 and arm64 architecture.

## Screenshot naming

By default, Playwright names the screenshots by joining the sanitized test title, project name and platform, like so...

```
{snapshotDir}/{testFilePath}/{testName}-{projectName}-{platform}{ext}
```

We need to alter this to compare snapshot agnostic of the platform in which they are run. We do this using the [`expect.toHaveScreenshot.pathTemplate`](https://playwright.dev/docs/api/class-testconfig#test-config-snapshot-path-template) option by setting it to...

```
{snapshotDir}/{testFilePath}/{testName}-{projectName}{ext}
```
