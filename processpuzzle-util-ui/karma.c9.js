import webpackTestConfig from './webpack-test.config';
import { ConfigOptions } from 'karma';

export default (config) => {
  config.set({
    basePath: './',
    frameworks: ['jasmine'],
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
        branches: 70,
        functions: 70
      }
    },
    reporters: ['mocha', 'coverage-istanbul'],
    hostname: process.env.IP,
    port: process.env.PORT,
    logLevel: config.LOG_WARN,
    browsers: ['ChromeHeadless'],
    browserConsoleLogOptions: {
      terminal: true,
      level: 'log'
    },
    customLaunchers: {
      ChromeHeadless: {
        base: 'Chrome',
        flags: [
           '--headless',
           '--disable-gpu',
           // Without a remote debugging port, Google Chrome exits immediately.
           '--remote-debugging-port=9222'
        ],
      }
    },
    singleRun: true,
    colors: true
  } as ConfigOptions);
};
