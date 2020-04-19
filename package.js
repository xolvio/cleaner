Package.describe({
  name: 'xolvio:cleaner',
  summary: 'Gives you methods to clear your Mongo database and collections for testing purposes',
  version: '0.4.0',
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
