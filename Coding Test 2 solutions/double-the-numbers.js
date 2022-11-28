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
  const myArray = JSON.parse(readLine().replace(/'/g, '"'));

/* Please do not modify anything above this line */

  // Write your code here
  let result=myArray.map((el)=>{
      if( typeof el==="number"){
          return el*2;
      }
      else{
          return typeof el;
      }
  });
  console.log(result);
}