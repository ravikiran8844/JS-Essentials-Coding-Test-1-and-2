"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString.trim().split("\n").map((str) => str.trim());
  main();
});

function readLine() {
  return inputString[currentLine++];
}

function main() {
  const nestedArray = JSON.parse(readLine().replace(/'/g, '"'));
  const depth = JSON.parse(readLine());
  
/* Please do not modify anything above this line */
  
  // Write your code here
 let flattenedArray=nestedArray.flat(depth)
let result=flattenedArray.map((element)=>{
    if(element.length%2!==0){
        return element.toUpperCase();
    }
    else{
        return element.toLowerCase();
    }
});
  console.log(result)
}