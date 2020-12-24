# eslint-plugin-mg-lambda

ESLint plugin for Missguided serverless functions.

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-mg-lambda`:

```
$ npm install eslint-plugin-mg-lambda --save-dev
```


## Usage

Add `mg-lambda-eslint` to the extends section of your `.eslintrc` configuration file.

```json
{
  "extends": [
    "plugin:mg-lambda/recommended"
  ]
}
```
