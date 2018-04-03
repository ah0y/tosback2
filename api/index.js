
module.exports = {
    TOSurl: new function() {
        // import { readFileSync } from 'fs';

            const git = require('git-promise');
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
            // git('../crawl_reviewed/app.net/').raw['log'], (err,result) => {}
            // console.log(getMostRecentFileName('../crawl_reviewed/500px.com'))
             // const p = '../crawl_reviewed/app.net/';
            var promise1 =
            
            git("log > uh.txt").then(function () {

            }).fail(function (err) { console.error(err); }).then(function () {
                var data = fs.readFileSync('uh.txt', 'utf8')
                var firstLine = data.split('\n').shift();
                var url = firstLine.substring(firstLine.indexOf(' '), firstLine.length);
                return url
            }).then(function (val) {
                return val
                console.log(val)
            });

            
                return promise1
        }
    }
