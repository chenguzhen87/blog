const process = require('process');
console.log(process.argv)
console.log(process.execPath)
console.log(process.argv0)

const args = require('minimist')(process.argv.slice(2),{boolean:['hello'],default:{
    name: true,
}})

console.log("args",args)
