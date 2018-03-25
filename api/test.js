module.exports = {
    TOSwork: function () {
        var TOSurl = require("./index.js");
        main()
        async function main() {
            var response = await TOSurl.TOSurl();
            console.log(response);
            // return response;
          }
        
    }
}


