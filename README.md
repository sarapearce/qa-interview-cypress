# cypress-example-todomvc-redux [![CircleCI](https://circleci.com/gh/cypress-io/cypress-example-todomvc-redux.svg?style=svg)](https://circleci.com/gh/cypress-io/cypress-example-todomvc-redux) [![renovate-app badge][renovate-badge]][renovate-app] [![Coverage Status](https://coveralls.io/repos/github/cypress-io/cypress-example-todomvc-redux/badge.svg?branch=master)](https://coveralls.io/github/cypress-io/cypress-example-todomvc-redux?branch=master)
> TodoMVC example with full e2e test code coverage

This example is a fork of the official [Redux TodoMVC example](https://github.com/reduxjs/redux/tree/master/examples/todomvc) with a set of [Cypress.io](https://www.cypress.io) end-to-end tests. The tests run instrumented application code and the code coverage is saved automatically using [cypress-istanbul](https://github.com/cypress-io/cypress-istanbul) plugin.

This repo was cloned from Cypress to use as an interview example.

## Install and use

Because this project uses [Parcel bundler](https://parceljs.org) to serve the web application, it requires Node v12+.

```shell
yarn
yarn test
```

The full code coverage HTML report will be saved in `coverage`. You can also see text summary by running

```shell
yarn report:coverage:text
```


## License

This project is licensed under the terms of the [MIT license](/LICENSE.md).