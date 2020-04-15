Xolv.io Cleaner
===============

This package clears your entire database for testing purposes.

# Get the Book

To learn more about testing with Meteor, consider purchasing our book [The Meteor Testing Manual](http://www.meteortesting.com/?utm_source=cleaner&utm_medium=banner&utm_campaign=cleaner).

[![](http://www.meteortesting.com/img/tmtm.gif)](http://www.meteortesting.com/?utm_source=cleaner&utm_medium=banner&utm_campaign=cleaner)

Your support helps us continue our work on Velocity and related frameworks.

# Installation

```
meteor add xolvio:cleaner
```

# Usage

resetDatabase only resets your database when it is executed inside a debugOnly environment.

You can clear your database with `resetDatabase(options, callback)`. It works on both the client and the server.

#### 1.3

```javascript
import { resetDatabase } from 'meteor/xolvio:cleaner';

// delete all collections with optional callback
resetDatabase(null, callback);
```

#### Pre 1.3

```javascript
var cleaner = Package['xolvio:cleaner'];

// delete all collections with optional callback
cleaner.resetDatabase(null, callback);
```

## Don't reset certain collection

#### 1.3

```javascript
import { resetDatabase } from 'meteor/xolvio:cleaner';

// delete all collections except myCollection with optional callback
resetDatabase({excludedCollections: ['myCollection']}, callback);
```

#### Pre 1.3

```javascript
var cleaner = Package['xolvio:cleaner'];

// delete all collections except myCollection with optional callback
cleaner.resetDatabase({excludedCollections: ['myCollection']}, callback);
```

### When using a database outside of localhost
This package resets the database configured for Meteor.
In order to prevent the accidental deletion of a production database, a special flag was added.

If your `MONGO_URL` includes hosts other than `localhost` and you actually intend for this external database to be reset by this package, please set the `ALLOW_CLEANING_REMOTE_DATABASE_DURING_TEST` environment variable to `1`.

```sh
export ALLOW_CLEANING_REMOTE_DATABASE_DURING_TEST=1
```
