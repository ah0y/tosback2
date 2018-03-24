var fs = require('file-system');
const path = require('path');
var Promise = require('promise');
var path_to_read = '../crawl_reviewed/500px.com/'
var to_read = 'test.txt'

var last_file = ''

 myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {

    fs.readdir(path_to_read, (err, files) => {
        if (err) throw err;
        // files.join('')
        var last_modified = 0;
        files.forEach(element => {
            fs.stat(path_to_read + element, (err, data) => {
                if (err) throw err;
                // if (data.mtime > last_modified) {
                    last_modified = data.mtime
                    last_file = data.mtime
                    // console.log(last_file)
                // }
                // console.log(data.mtime)
            });
        });
    });
    resolve(last_file);
    }, 2000)
 });


 var printResult = (results) => {console.log("Results = ", results, "message = ", last_file)}

function main() {
    Promise.all(myPromise).then(printResult);
    console.log("\"\"" + last_file);

}

main();


