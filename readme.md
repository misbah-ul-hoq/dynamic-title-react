# dynamic-title-react

![npm version](https://img.shields.io/npm/v/dynamic-title-react.svg) ![npm downloads](https://img.shields.io/npm/dm/dynamic-title-react.svg)

The simplest way to use dynamic title in react.

## Installation

You can install the package using npm:

```bash
npm i dynamic-title-react
```

## Importing and using it 
```js
import useDocumentTitle from "dynamic-title-react";

const Home = () => {
  useDocumentTitle("Home Page");
  return <div>This is the home page</div>;
};

export default Home;

```
