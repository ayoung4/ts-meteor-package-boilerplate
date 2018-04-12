// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by ts-meteor-package-boilerplate.js.
import { name as packageName } from "meteor/ayoung4:ts-meteor-package-boilerplate";

// Write your tests here!
// Here is an example.
Tinytest.add('ts-meteor-package-boilerplate - example', function (test) {
  test.equal(packageName, "ts-meteor-package-boilerplate");
});
