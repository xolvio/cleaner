Package.describe({
  name: 'xolvio:cleaner',
  summary: 'Gives you methods to clear your Mongo database and collections for testing purposes',
  version: '0.3.3',
  git: 'https://github.com/xolvio/cleaner.git',
  documentation: 'README.md',
  debugOnly: true,
});

Package.onUse(function(api) {
  api.versionsFrom('1.3');
  api.use(['ecmascript', 'mongo', 'underscore']);
  api.addFiles('cleaner.js', ['client', 'server']);
  api.export('resetDatabase', ['client', 'server']);
});

Package.onTest(function(api) {
  api.versionsFrom('1.3');
  api.use('xolvio:cleaner');
  api.use('ecmascript');
  api.use('sanjo:jasmine@1.0.1');
  api.use('velocity:html-reporter@0.10.0');

  api.addFiles('tests/cleaner.js', ['server', 'client']);
});
