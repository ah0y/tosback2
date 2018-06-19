
module.exports = {
    setPath: function (path) {
        _path = path
    },


    getCommit: function getCommit() {
        const git = require('git-promise');

        var promise1 =
            git("log -p " +  _path).then(function (log) {
                var commitInfo = []
                var firstLine = log.split('\n').shift();
                var thirdLine = log.split('\n')

                var commit = firstLine.substring(firstLine.indexOf(' '), firstLine.length).trim();
                commitInfo.push(commit)
               
                var date = thirdLine[2]
                commitInfo.push(date)
                
                return commitInfo
            });
        return promise1
    }
}