# Contributing to better-typescript-lib

Thank you for considering contributing to this project. Here is the guideline on how to contribute.

You can just file an issue or send a pull request. Bug report, feature suggestion and other discussion are all welcome.

## Submitting an issue

### Bug Reports

When senging a bug report, please clarify the version of TypeScript you are using and the version of better-typescript-lib you are using.

### Feature Suggestions

Feature suggestions are welcome, but please be aware that:

- We consider type safety as the primary goal of this project. Therefore, unsafe-but-useful features are not accepted.

## Submitting a pull request

Below are the guidelines for submitting a pull request.

### How to change type definitions

better-typescript-lib replaces the built-in type definitions with its own ones. The renewed definitions are in the `lib/` directory.

Replacement is done on per-name basis; if our definition includes an `A` interface, the entire declaration of `A` is replaced with ours. Other declarations are not affected and the original ones are kept.

### Commiting Build Artifacts

Currently, build artifacts needs to be committed. Follow the following steps to build and commit them.

1. `npm run build:tsc`
2. `npm run build:lib`
3. `npm run build:diff`
4. Commit the build artifacts

### How to Run Tests

Follow below steps to run tests locally.

1. `npm run build:tsc`
2. `npm run build:lib`
3. `npm run build:package`
4. `npm run install` in tests directory
5. `npm test` in tests directory