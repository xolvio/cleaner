Xolv.io Cleaner
===============

This package cleans your database for testing purposes. 

Visit [Xolv.io](https://www.xolv.io) to find out more about what we do.

# Installation

```
meteor add xolvio:cleaner
```

# Usage

resetDatabase only resets your database when it is executed inside a debugOnly environment.

You can clear your database with `resetDatabase(options, callback)`. It works on both the client and the server.

```javascript
import { resetDatabase } from 'meteor/xolvio:cleaner';

// delete all collections with optional callback
resetDatabase(null, callback);
```

You can use `options.db`

## Provide specific database instance
```javascript
// delete all collections except myCollection with optional callback
resetDatabase({db: yourDatabaseInstance}, callback);
```

## Don't reset certain collection
```javascript
// delete all collections except myCollection with optional callback
resetDatabase({excludedCollections: ['myCollection']}, callback);
```

# About Xolv.io

