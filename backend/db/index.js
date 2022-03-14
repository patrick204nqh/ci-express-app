const fs = require('fs');
const path = require('path');

let users = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'users.json')));
let posts = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'posts.json')));

module.exports = { users, posts };
