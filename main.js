const { parse } = require('./parser.js');
const fs = require('fs');


async function main(){
    const file = fs.readFileSync('./transcript.pdf');
    const data = await parse(file);
    console.log(data);
}

main();