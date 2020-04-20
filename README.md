[![Coverage Status](https://coveralls.io/repos/github/francknoelkouassi-dev/project-cocktail/badge.svg?branch=master)](https://coveralls.io/github/francknoelkouassi-dev/project-cocktail?branch=master)
[![Build Status](https://travis-ci.org/francknoelkouassi-dev/project-cocktail.svg?branch=master)](https://travis-ci.org/francknoelkouassi-dev/project-cocktail)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/f955063fa2d54c9dacdb0c1a1510c50c)](https://www.codacy.com/manual/francknoelkouassi-dev/project-cocktail?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=francknoelkouassi-dev/project-cocktail&amp;utm_campaign=Badge_Grade)
[![Known Vulnerabilities](https://snyk.io/test/github/francknoelkouassi-dev/project-cocktail/badge.svg?targetFile=package.json)](https://snyk.io/test/github/francknoelkouassi-dev/project-cocktail?targetFile=package.json)

# ProjectCocktail

This is a test project to demonstrate using Intern with Angular 9+. Specs have been reformatted and converted to
 using Intern best practices as outlined below.

## Get started

### Clone the repo

```shell
git clone https://github.com/francknoelkouassi-dev/project-cocktail
cd project-cocktail
```

### Install npm packages

Install the `npm` packages described in the `package.json` and verify that it works:

```shell
npm install
npm start
```

The `npm start` command builds (compiles TypeScript and copies assets) the application into `dist/`, watches for changes to the source files, and runs `lite-server` on port `3000`.

Shut it down manually with `Ctrl-C`.

#### npm scripts

These are the most useful commands defined in `package.json`:

* `npm start` - runs the TypeScript compiler, asset copier, and a server at the same time, all three in "watch mode".
* `npm run build` - runs the TypeScript compiler and asset copier once.
* `npm run build:watch` - runs the TypeScript compiler and asset copier in "watch mode"; when changes occur to source files, they will be recompiled or copied into `dist/`.
* `npm run lint` - runs `tslint` on the project files.
* `npm run serve` - runs `lite-server`.

These are the test-related scripts:

* `npm test` - builds the application and runs Intern tests (both unit and functional) one time.
* `npm run ci` - cleans, lints, and builds the application and runs Intern tests (both unit and functional) one time.


## Techniques

Because Intern seamlessly handles asynchronous testing, there is no reason to use `async`, `fakeAsync`, or `tick` from `@angular/core/testing`. Furthermore, because TypeScript introduced downlevel asynchronous function support in version 2.1, the use of `async` and `await` has been leveraged to write these tests.
