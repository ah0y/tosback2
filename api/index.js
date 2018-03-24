const simpleGit = require('simple-git');
// var firstline = require(firstline)


// const gitP = require('simple-git/promise');
// const git = git('../crawl_reviewed/');

var fs = require('fs'),
    path = require('path'),
    _ = require('underscore');

// Return only base file name without dir
function getMostRecentFileName(dir) {
    var files = fs.readdirSync(dir);

    // use underscore for max()
    return _.max(files, function (f) {
        var fullpath = path.join(dir, f);

        // ctime = creation time is used
        // replace with mtime for modification time
        return fs.statSync(fullpath).ctime;
    });
}

// console.log(getMostRecentFileName('../crawl_reviewed/500px.com'))
const p = '../crawl_reviewed/500px.com/';

simpleGit(p).raw(
    [
      'log',
      
    ], (err, result) => {
        // console.log(result)
        fs.writeFile('plswork.txt', result, (err) => {
            if (err) throw err;
            readCommits()
            console.log(p + "The file was succesfully saved!");
        })
    });


   function readCommits(){ 
    fs.readFile('plswork.txt', 'utf8', (err, data) => {
        if (err) throw err;
        // console.log(data);
        // getLatestCommit()
        var firstLine = data.split('\n').shift();
        var url = firstLine.substring(firstLine.indexOf(' '), firstLine.length);
        console.log(url)
      });
    }


    // function getLatestCommit() {
    //     firstline('./plswork.txt');
    // }