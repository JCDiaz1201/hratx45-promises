/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('request');
let Promise = require('bluebird');


// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, callback) {
  // TODO
  fs.readFile(filePath, 'utf8', function(err, content){
    // console.log(typeof content);
    if (err) {
      callback(err, null);
    } else {
      let result = content.split('\n')
      callback(null, result[0]);
    }
  });
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url) {
  // TODO
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
