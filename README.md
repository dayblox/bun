# Bun starter

![](../../actions/workflows/ci.yml/badge.svg)

[![](https://railway.app/button.svg)](https://railway.app/template/G3k1Tv?referralCode=bonus)

## Key Features

- [<img src="https://user-images.githubusercontent.com/17180392/211619716-8630ae1a-e5ea-424f-87a6-f3188edae821.svg" height=19.2 align=center /> TypeScript](https://www.typescriptlang.org/)
  - [Typed environment variables](src/env.ts#L4)
- [<img src="https://github-production-user-asset-6210df.s3.amazonaws.com/17180392/266803654-ac5f086c-71ec-493a-a377-784cec2dc525.svg" height=19.2 align=center /> Bun](https://bun.sh/)
  - [Debugging](.vscode/launch.json)
  - [ESM & CommonJS compatibility](https://bun.sh/docs/runtime/modules#module-systems)
  - [Fast package manager](https://bun.sh/docs/cli/install)
  - [Fast runtime](https://bun.sh/docs/cli/run#performance)
  - [Fast test runner](https://bun.sh/docs/cli/test#performance)
  - [Highly optimized APIs](https://bun.sh/docs/runtime/bun-apis)
  - [Hot reloading](https://bun.sh/docs/runtime/hot#hot-mode)
  - [TypeScript first class support](https://bun.sh/docs/runtime/typescript)
- [<img src="https://github-production-user-asset-6210df.s3.amazonaws.com/17180392/266780371-74b32ff7-5cc3-45e1-af80-923a05c9f87b.svg" height=19.2 align=center /> Biome](https://biomejs.dev/)
  - [Fast formatting](https://github.com/biomejs/biome/tree/main/benchmark#formatting)
  - [Fast linting](https://github.com/biomejs/biome/tree/main/benchmark#linting)
  - [Import sorting](https://biomejs.dev/analyzer/import-sorting/)
- [<img src="https://user-images.githubusercontent.com/124377191/228447757-78408c15-e914-4fb3-9135-f1ff45ee3fce.svg" height=19.2 align=center /> GitHub](https://github.com)
  - [One click template](https://github.com/dayblox/bun/generate)
  - [Continuous Integration](.github/workflows/ci.yml)

## Prerequisites

- [<img src="https://github-production-user-asset-6210df.s3.amazonaws.com/17180392/266803654-ac5f086c-71ec-493a-a377-784cec2dc525.svg" height=19.2 align=center /> Bun](https://bun.sh/) `>=1.0.0`
  - [All-in-one toolkit](https://bun.sh/docs)
  - [JavaScript runtime](https://bun.sh/docs/cli/run)
  - [Package manager](https://bun.sh/docs/cli/install)
  - [Test runner](https://bun.sh/docs/cli/test)
  - [Bundler](https://bun.sh/docs/bundler)

## Getting Started

1.  **[Deploy on Railway](https://railway.app/template/G3k1Tv?referralCode=bonus)** or **[use this template](https://github.com/dayblox/bun/generate)**

2.  **Clone** the repository

3.  **Install** dependencies

    ```sh
    bun i
    ```

    #

    _Optionally_ typecheck environment variables

    `.env`

    ```env
    PORT=3000
    ```

    `src/env.ts` ([docs](https://v4.zod.dev/api#primitives))

    ```ts
    const env = z.object({
      PORT: z.coerce.number().positive().max(65535).default(3000),
    });
    ```

## Usage

- **Development** mode

  ```sh
  bun dev
  ```

- **Development debug** mode (VSCode)

  `F5`

- Running **tests** (**watch** mode)

  ```sh
  bun test --watch
  ```

- **Production** mode

  ```sh
  bun start
  ```
