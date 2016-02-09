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

You can clear your database with:

```javascript
var cleaner = Package['xolvio:cleaner'];

// delete all collections
cleaner.resetDatabase();
```

You can do this inside a Meteor method and call it from your client tests.

## Don't reset certain collection

```javascript
var cleaner = Package['xolvio:cleaner'];

// delete all collections except myCollection
cleaner.resetDatabase({excludedCollections: ['myCollection']});
```
