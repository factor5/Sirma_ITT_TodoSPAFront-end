module.exports = function(config) {
  var testFiles = [
    'public/js/requirejs-config.js',
    'test/unit/js/test-main.js',
    { pattern: 'public/lib/**/*.js', included: false },
    { pattern: 'public/js/**/*.js', included: false }
  ];

  var options = JSON.parse(process.argv[2]);

  if (options.tests) {
    testFiles.push({ pattern: 'test/unit/' + options.test, included: false });
  } else {
    testFiles.push({ pattern: 'test/unit/**/*.js', included: false });
  }

  config.set({
    basePath: '',
    frameworks: ['requirejs', 'jasmine'],
    files: testFiles,
    autoWatch: false,
    captureTimeout: 60000
  });
};
