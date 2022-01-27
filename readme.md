# faster-styled-components-types

TypeScript types for [styled-components](https://github.com/styled-components/styled-components)
that focus more on type checking quickly instead of complete like [@types/styled-components](https://www.npmjs.com/package/@types/styled-components)

So far they only suport **React Native**, in the meanwhile check out [this gist](https://gist.github.com/nfarina/ea282fbb01574e95d87ce661f7fe8630) for React.


## Installation
Make sure you don't have `@types/styled-components` or `@types/styled-components-react-native` installed.
```bash
npm r @types/styled-components @types/styled-components-react-native
```

Then install the alternative typings:

```bash
npm i faster-styled-component-types
```

Since our types arer not prefixed with `@types`, you then need to
go to your `tsconfig.json` and change `typeRoots` to this:

```json
{
  "compilerOptions": {
    "typeRoots": ["./node_modules/@types/", "./node_modules/faster-styled-component-types"]
  }
}
```