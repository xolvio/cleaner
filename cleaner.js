resetDatabase = function (options) {
  if (process.env.NODE_ENV !== 'development' ||
     !(process.env.IS_MIRROR || process.env.VELOCITY_TEST_PACKAGES)
  ) {
    throw new Error(
      'resetDatabase is not allowed outside of a mirror. ' +
      'Something has gone wrong.'
    );
  }

  options = options || {};
  var excludedCollections = ['system.indexes'];
  if (options.excludedCollections) {
    excludedCollections = excludedCollections.concat(options.excludedCollections);
  }

  var db = MongoInternals.defaultRemoteCollectionDriver().mongo.db;
  var getCollections = Meteor.wrapAsync(db.collections, db);
  var collections = getCollections();
  var appCollections = _.reject(collections, function (col) {
    return col.collectionName.indexOf('velocity') === 0 ||
      excludedCollections.indexOf(col.collectionName) !== -1;
  });

  _.each(appCollections, function (appCollection) {
    var remove = Meteor.wrapAsync(appCollection.remove, appCollection);
    remove({});
  });
};

if (Meteor.isClient) {
  Meteor.methods({
    resetDatabase: function () {
      resetDatabase();
    }
  });
}
