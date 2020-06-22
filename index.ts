import * as fs from "fs";
var input = fs.readFileSync("/dev/stdin", "utf8");
var re = /[A-Z]+/;
console.log(re.test(input) ? "A" : "a");
