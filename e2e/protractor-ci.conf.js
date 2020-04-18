const config = require('./protractor.conf').config;

config.capabilities = {
	browserName: 'chrome',
	chromeOptions: {
		args: ['--headless', '--no-sandbox'],
		binary: 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
	}
};

exports.config = config;
