module.exports = {
    TOSurl: function () {

        return main()

        function main() {
            const simpleGit = require('simple-git');
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
            const p = '../crawl_reviewed/app.net/';
            simpleGit(p).raw(
                [
                    'log',
                ], (err, result) => {
                    // console.log(result)
                    fs.writeFile('plswork.txt', result, (err) => {
                        if (err) throw err;
                        readCommits()
                        console.log(p + "The file was succesfully saved!");
                        return 'got to git';
                    })
                });
            function readCommits() {
                fs.readFile('plswork.txt', 'utf8', (err, data) => {
                    if (err) throw err;
                    // console.log(data);
                    // getLatestCommit()
                    var firstLine = data.split('\n').shift();
                    var url = firstLine.substring(firstLine.indexOf(' '), firstLine.length);
                    console.log(url)
                    return url;
                });
            }
        }
    }
}
