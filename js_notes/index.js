const md5 = require('md5')
const password = 'password'
console.log(md5(password))
console.log(md5(password).length)