import webpackTestConfig from './webpack-test.config';
import { ConfigOptions } from 'karma';

export default (config) => {
  config.set({
    basePath: './',
    frameworks: ['jasmine'],
    plugins: [
      require('karma-chrome-launcher'),
      require('karma-coverage'),
      require('karma-coverage-istanbul-reporter'),
      require('karma-jasmine'),
      require('karma-jasmine-html-reporter'),
      require('karma-remap-coverage'),
      require('karma-sourcemap-loader'),
      require('karma-webpack')
    ],

    client:{
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },

    customLaunchers: {         // From the CLI. Not used here but interesting chrome setup for travis CI using chromium
      Chrome_travis_ci: {
        base: 'Chrome',
        flags: ['--no-sandbox']
      },
      ChromeHeadless: {
        base: 'Chrome',
        flags: [
          '--headless',
          '--no-sandbox',
          '--disable-gpu',
          // Without a remote debugging port, Google Chrome exits immediately.
          '--remote-debugging-port=9222'
        ],
      }
    },

    files: [
      'karma-test-entry.ts'
    ],

    preprocessors: {
      'karma-test-entry.ts': ['webpack', 'sourcemap']
    },

    webpack: webpackTestConfig,
    webpackMiddleware: {
      noInfo: true,
      stats: {
        chunks: false
      }
    },

    mime: {
      'text/x-typescript': [ 'ts' ]
    },

    coverageIstanbulReporter: {
      reports: [ 'html', 'lcovonly', 'text-summary' ],
      dir: 'target/coverage',
      fixWebpackSourcePaths: true,
      thresholds: {
        statements: 70,
        lines: 70,
        branches: 40,
        functions: 60
      }
    },
    angularCli: {
      environment: 'dev'
    },

    reporters: ['progress', 'coverage-istanbul', 'kjhtml'],
    logLevel: config.LOG_WARN,
    browsers: ['Chrome'],
    browserConsoleLogOptions: {
      terminal: true,
      level: 'log'
    },
    singleRun: true,
    colors: true
  } as ConfigOptions);
};
