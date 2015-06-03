Package.describe({
  name: 'xolvio:cleaner',
  version: '0.1.0',
  debugOnly: true,
  summary: 'Gives you methods to clear your Mongo database and collections for testing purposes'
});

Package.onUse(function(api) {

  api.addFiles([
    'cleaner.js'
  ], 'server');

  api.export('resetDatabase', 'server');

});
