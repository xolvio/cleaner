if (Meteor.isServer) {
  const _resetDatabase = function (options) {
    if (process.env.NODE_ENV !== 'development') {
      throw new Error(
        'resetDatabase is not allowed outside of a development mode. ' +
        'Aborting.'
      );
    }

    // avoid the unintentional deletions of production databases
    if (typeof process.env.MONGO_URL === 'string') {
      var mongodbUri = Npm.require('mongodb-uri');
      const hosts = mongodbUri.parse(process.env.MONGO_URL).hosts;
      
      if (hosts.find(h => h.host !== "localhost") 
          && process.env.ALLOW_CLEANING_REMOTE_DATABASE_DURING_TEST !== '1') {
        throw Error("Since $MONGO_URL contains hosts other than `localhost` " +
                    "you should set the special environment variable " +
                    "ALLOW_CLEANING_REMOTE_DATABASE_DURING_TEST to 1 " +
                    "as a safety measure."
        );
      }
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

  Meteor.methods({
    'xolvio:cleaner/resetDatabase': function (options) {
      _resetDatabase(options);
    }
  });

  resetDatabase = function(options, callback) {
    _resetDatabase(options);
    if (typeof callback === 'function') { callback(); }
  }

}
if (Meteor.isClient) {
  resetDatabase = function(options, callback) {
    Meteor.call('xolvio:cleaner/resetDatabase', options, callback);
  }
}
