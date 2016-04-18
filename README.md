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

You can clear your database with `resetDatabase`. It works on both the client and the server.

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
