// conf.js
exports.config = {
    framework: 'jasmine',
    //seleniumServerJar: 'C:/Users/christopher/AppData/Roaming/npm/node_modules/protractor/selenium/selenium-server-standalone-2.48.2.jar',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['home/*.spec.js']
}