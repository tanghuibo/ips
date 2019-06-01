#!/usr/bin/env node
require('colors');
const networkInterfaces = require('os').networkInterfaces();
var ipList = [];
for(let key in networkInterfaces) {
    let value = networkInterfaces[key];
    ipList.push(...value);
}
let filterList = ['127.0.0.1', '0.0.0.0', '::1'];
ipList.filter(item => filterList.indexOf(item.address) == -1).sort((item1, item2) => {
    return item1.family.localeCompare(item2.family);
}).forEach(
    item => console.log(item.family.blue, item.address.green)
);