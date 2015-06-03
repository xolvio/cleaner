var Future = Npm.require('fibers/future');

resetDatabase = function () {

  if (process.env.NODE_ENV !== 'development') {
    console.error('[xolvio:cleaner] Detected non-development environment. Aborting database reset');
    return;
  }

  console.log('Removing collections');
  var fut = new Future();

  var collectionsRemoved = 0;
  var db = MongoInternals.defaultRemoteCollectionDriver().mongo.db;

  db.collections(function (err, collections) {

    var appCollections = _.reject(collections, function (col) {
      return col.collectionName.indexOf('velocity') === 0 ||
        col.collectionName === 'system.indexes';
    });

    if (appCollections.length > 0) {
      _.each(appCollections, function (appCollection) {
        var collectionCanonicalName = db.databaseName + '.' + appCollection.collectionName;
        appCollection.remove(function (e) {
          if (e) {
            console.error('Failed removing collection', collectionCanonicalName, e);
            fut.return('fail: ' + e);
          }
          collectionsRemoved++;
          console.log('Removed', collectionCanonicalName);
          if (appCollections.length === collectionsRemoved) {
            console.log('Successfully removed collections');
            fut['return']('success');
          }
        });
      });
    } else {
      console.log('No collections found to remove');
      fut['return']('success');
    }

  });

  return fut.wait();
};
