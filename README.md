**Intro**

This is fork from [this awesome starter](https://github.com/aeksco/react-typescript-web-extension-starter).
Main difference is that CSS-in-JS library (Emotion) is used for styling and it's upgraded to React 18,
which is not the case for the source at the moment of writing.

**Getting Started**

Run the following commands to install dependencies and start developing

```
yarn install
yarn dev
```

**Scripts**

-   `yarn dev` - run `webpack` in `watch` mode
-   `yarn storybook` - runs the Storybook server
-   `yarn build` - builds the production-ready unpacked extension
-   `yarn test -u` - runs Jest + updates test snapshots
-   `yarn lint` - runs EsLint
-   `yarn prettify` - runs Prettier

**Notes**

-   This project is a [repository template](https://github.blog/2019-06-06-generate-new-repositories-with-repository-templates/) - click the `Use this template` button to use this starter codebase for your next project.

-   Includes ESLint configured to work with TypeScript and Prettier.

-   Includes tests with Jest - note that the `babel.config.js` and associated dependencies are only necessary for Jest to work with TypeScript.

-   Recommended to use `Visual Studio Code` with the `Format on Save` setting turned on.

-   Example icons courtesy of [Heroicons](https://heroicons.com/).

-   Includes Storybook configured to work with React + TypeScript. Note that it maintains its own `webpack.config.js` and `tsconfig.json` files. See example story in `src/components/hello/__tests__/hello.stories.tsx`

-   Includes a custom mock for the [webextension-polyfill-ts](https://github.com/Lusito/webextension-polyfill-ts) package in `src/__mocks__`. This allows you to mock any browser APIs used by your extension so you can develop your components inside Storybook.

**Built with**

-   [React](https://reactjs.org)
-   [TypeScript](https://www.typescriptlang.org/)
-   [Storybook](https://storybook.js.org/)
-   [Jest](https://jestjs.io)
-   [Eslint](https://eslint.org/)
-   [Prettier](https://prettier.io/)
-   [Webpack](https://webpack.js.org/)
-   [Babel](https://babeljs.io/)
-   [Emotion](https://emotion.sh/docs/introduction)
-   [webextension-polyfill](https://github.com/mozilla/webextension-polyfill)

**Misc. References**

-   [Chrome Extension Developer Guide](https://developer.chrome.com/extensions/devguide)
-   [Firefox Extension Developer Guide](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension)
-   [Eslint + Prettier + Typescript Guide](https://dev.to/robertcoopercode/using-eslint-and-prettier-in-a-typescript-project-53jb)
