# Example Angular App Using React Liveness Component

This project is based off other angular projects that show how to use react in angular like https://github.com/zackypick/react-in-angular

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Issues ran into while developing

- General Typescript Issues
  - `skipLibCheck`
    - If you'd like a general catch all solution turning on `skipLibCheck` in `compilerOptions` will prevent all TS issues
  - `Cannot find name 'Long'`
    - Install `long@4.0.0` and `@types/long@4.0.0` then add `"types": ["long"]` to tsconfig.json
  - `Cannot find React`
    - Default angular config doesn't like default imports which we use in the `FaceLivenessDetector` component. You can add `allowSyntheticDefaultImports` to tsconfig.json to fix this.
  - `Cannot find name TContext`
    - `xstate` uses the generic `TContext` which seems to have some issues in typescript@5, downgrading to typescript@4 which we use in `FaceLivenessDetector` seems to fix the issue
- Browser issues with `process`
  - The `FaceLivenessDetector` component allows for some env variable overrides (this may be changed in the future) which checks `process.env`. You will need to add a polyfill for `process.env` to fix this error.
