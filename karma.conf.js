// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
	const process = require('process');
	process.env.CHROME_BIN = require('puppeteer').executablePath();

	config.set({
		basePath: '',
		frameworks: ['jasmine', '@angular-devkit/build-angular'],
		plugins: [
			require('karma-jasmine'),
			require('karma-chrome-launcher'),
			require('karma-jasmine-html-reporter'),
			require('karma-coverage-istanbul-reporter'),
			require('@angular-devkit/build-angular/plugins/karma')
		],
		client: {
			clearContext: false // leave Jasmine Spec Runner output visible in browser
		},
		coverageIstanbulReporter: {
			dir: require('path').join(__dirname, './coverage/project-cocktail'),
			reports: ['html', 'lcovonly', 'text-summary'],
			fixWebpackSourcePaths: true
		},
		reporters: ['progress', 'kjhtml'],
		port: 9876,
		colors: true,
		logLevel: config.LOG_INFO,
		autoWatch: true,
		browsers: ['HeadlessChrome', 'Chrome', 'ChromeHeadless', 'ChromeHeadlessNoSandbox'],
		customLaunchers: {
			HeadlessChrome: {
				base: 'ChromeHeadless',
				flags: ['--no-sandbox']
			},
			ChromeHeadlessNoSandbox: {
				base: 'ChromeHeadless',
				flags: ['--no-sandbox']
			}
		},
		browserDisconnectTimeout: 10000,
		browserDisconnectTolerance: 3,
		browserNoActivityTimeout: 60000,
		singleRun: false,
		restartOnFileChange: true
	});
};
