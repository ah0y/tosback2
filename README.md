## ToSBack2 API


A RESTful API that interacts with the tosback2 web crawler. Built with MongoDB, Express 4, and Node.



### Installation:
1. First, clone the repo `git clone https://github.com/ah0y/tosback2.git`
2. Then, cd into the api `cd /tosback2/api`
3. Install npm packages `npm install`
4. Have MongoDB running by running `mongod` in a terminal
5. Finally, start up the server with `node server.js`


### Example Post Request:

![Screenshot](https://imgur.com/UukEMFx.png)



### How to update the Terms of Service that the API looks at:
1. `git remote add upstream https://github.com/tosdr/tosback2.git`
2. `git fetch upstream`
3. `git pull upstream master`




