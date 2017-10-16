# ProcessPuzzle Util
[![Build Status](https://travis-ci.org/ZsZs/processpuzzle-util.svg?branch=master)](https://travis-ci.org/ZsZs/processpuzzle-util)
[![codecov](https://codecov.io/gh/ZsZs/processpuzzle-util/branch/master/graph/badge.svg)](https://codecov.io/gh/ZsZs/processpuzzle-util)
[![npm version](https://badge.fury.io/js/processpuzzle-util-ui.svg)](http://badge.fury.io/js/processpuzzle-util-ui)
[![devDependency Status](https://david-dm.org/ZsZs/processpuzzle-util/dev-status.svg)](https://david-dm.org/ZsZs/processpuzzle-util?type=dev)
[![GitHub issues](https://img.shields.io/github/issues/ZsZs/processpuzzle-util.svg)](https://github.com/ZsZs/processpuzzle-util/issues)
[![GitHub stars](https://img.shields.io/github/stars/ZsZs/processpuzzle-util.svg)](https://github.com/ZsZs/processpuzzle-util/stargazers)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/ZsZs/processpuzzle-util/master/LICENSE)

## Demo
https://ZsZs.github.io/processpuzzle-util/

## Table of contents

- [About](#about)
- [Installation](#installation)
- [Documentation](#documentation)
- [Development](#development)
- [License](#license)

## About

Utility functions for ProcessPuzzle business platform.

## Installation

Install through npm:
```
npm install --save processpuzzle-util-ui
```

Then include in your apps module:

```typescript
import { NgModule } from '@angular/core';
import { ProcessPuzzleUtilUiModule } from 'processpuzzle-util-ui';

@NgModule({
  imports: [
    ProcessPuzzleUtilUiModule.forRoot()
  ]
})
export class MyModule {}
```

Finally use in one of your apps components:
```typescript
import { Component } from '@angular/core';

@Component({
  template: '<hello-world></hello-world>'
})
export class MyComponent {}
```

You may also find it useful to view the [demo source](https://github.com/ZsZs/processpuzzle-util/blob/master/demo/demo.component.ts).

### Usage without a module bundler
```
<script src="node_modules/processpuzzle-util-ui/bundles/processpuzzle-util-ui.umd.js"></script>
<script>
    // everything is exported processpuzzleUtilUi namespace
</script>
```

## Documentation
All documentation is auto-generated from the source via [compodoc](https://compodoc.github.io/compodoc/) and can be viewed here:
https://ZsZs.github.io/processpuzzle-util/docs/

## Development

### Prepare your environment
* Install [Node.js](http://nodejs.org/) and NPM
* Install local dev dependencies: `npm install` while current directory is this repo

### Development server
Run `npm start` to start a development server on port 8000 with auto reload + tests.

### Testing
Run `npm test` to run tests once or `npm run test:watch` to continually run tests.

### Release
* Bump the version in package.json (once the module hits 1.0 this will become automatic)
```bash
npm run release
```

## License

MIT
