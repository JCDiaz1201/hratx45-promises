/*
 * Write a function WITH NO CALLBACKS that,
 * (1) reads a GitHub username from a `readFilePath`
 *     (the username will be the first line of the file)
 * (2) then, sends a request to the GitHub API for the user's profile
 * (3) then, writes the JSON response of the API to `writeFilePath`
 *
 * HINT: We exported some similar promise-returning functions in previous exercises
 */

let fs = require('fs');
let Promise = require('bluebird');
let GitHubApi = require("@octokit/rest");

let github = new GitHubApi({ version: '3.0.0' });



let fetchProfileAndWriteToFile = function(readFilePath, writeFilePath) {
  // TODO
  return new Promise(function(resolve, reject) {
    github.search.users({ q: readFilePath }, function(err, res) {
      if (err) {
        reject(err); 
      } else {
        let githubResURL = res.items[0].avatar_url;
        resolve(githubResURL);
      }
    });
  });
};

fetchProfileAndWriteToFile('JCDiaz1201')
.then(function(githubResURL){
  console.log(githubResURL);
})
.catch(function(error) {
  console.log('Error encountered: ', error);
});

// Export these functions so we can test them
module.exports = {
  fetchProfileAndWriteToFile: fetchProfileAndWriteToFile
};
