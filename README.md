Xolv.io Cleaner
=============== 

This package clears your entire database for testing purposes.

**WARNING: BE SURE TO NEVER CONNECT TO A LIVE DATABASE WHEN YOU HAVE THIS PACKAGE INSTALLED. 
YOU WILL DELETE ALL YOUR COLLECTIONS!!**

The package has two levels of safety built-in: 

1. The `debugOnly` flag set which means it will not get bundled into the app. 
2. It has a guard that does nothing `if process.env.NODE_ENV !== 'development'`  

It's safe to use this in your project for testing as long as you don't mess the two safety 
mechanisms above. This means:

1. If you run a copy of this package, DO NOT remove the `debugOnly` flag from the `package.js` file
2. In addition to point 1, do not set `process.env.NODE_ENV` to `development` when connected to a 
remote database. 

#Installation
```
meteor add xolvio:cleaner
```

#Usage
You can include this call in the `before` sections of your tests:

```javascript
var cleaner = Package['xolvio:cleaner'];

// delete all collections
cleaner.resetDatabase();
```