//this is a helper function that is lke a parent directory
const path = require("path");

module.exports = path.dirname(process.mainModule.filename); // mainModule referes to the main directory of our app.js file , the file name is refering which file we want to set into dirname
