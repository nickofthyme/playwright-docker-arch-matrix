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

## Demo apps

- Playwright.dev - A copy of home page for testing - [link](https://nickofthyme.github.io/playwright-docker-arch-matrix/playwright-dev).
- React demo app - React starter app with added examples - [link](https://nickofthyme.github.io/playwright-docker-arch-matrix/simple-react-app).
  - Text - Variety of typography via tailwind - [link](https://nickofthyme.github.io/playwright-docker-arch-matrix/simple-react-app/examples/text)
  - Canvas - `Chart.js` example scatter plot - [link](https://nickofthyme.github.io/playwright-docker-arch-matrix/simple-react-app/examples/canvas)
  - Chart - Elastic charts examples from original issue - [link](https://nickofthyme.github.io/playwright-docker-arch-matrix/simple-react-app/examples/chart)
  - Icons - Set of svg icons - [link](https://nickofthyme.github.io/playwright-docker-arch-matrix/simple-react-app/examples/icons)
  - Image - A high-res image - [link](https://nickofthyme.github.io/playwright-docker-arch-matrix/simple-react-app/examples/image)

## Screenshot naming

By default, Playwright names the screenshots by joining the sanitized test title, project name and platform, like so...

```
{snapshotDir}/{testFilePath}/{testName}-{projectName}-{platform}{ext}

// ./e2e/screenshots/playwright-dev.test.ts/should-render-full-page-chromium-darwin.png
```

To compare screenshot agnostically across all runs, we need to alter this. We do so using the [`expect.toHaveScreenshot.pathTemplate`](https://playwright.dev/docs/api/class-testconfig#test-config-snapshot-path-template) option by setting it to...

```
{snapshotDir}/{testFilePath}/{testName}-{projectName}{ext}
// ./e2e/screenshots/playwright-dev.test.ts/should-render-full-page-chromium.png
```

## Testing cases

### Playwright.dev

file: `e2e/tests/playwright-dev.test.ts`

These tests are meant to simulate a full page screenshot testing and how variability affects the screenshot testing.

### `@elastic/charts`

file: `e2e/tests/elastic-charts.test.ts`

These tests are meant to test the original case described in the issue using `@elastic/charts` and how hover, patterns and canvas affects the screenshot testing.

### Starter react app home page

file: `e2e/tests/react-app/home.test.ts`

These tests are meant to test how hover, icons and drop shadows affects the screenshot testing.

### Example cases

file: `e2e/tests/react-app/examples.test.ts`

These are the examples described above and are meant to test the basic static simple use case of screenshot testing.
