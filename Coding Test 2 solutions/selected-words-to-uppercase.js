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
  const wordsList = JSON.parse(readLine().replace(/'/g, '"'));
  const myString = readLine();

/* Please do not modify anything above this line */
  
  // Write your code here
  let newWordsList=[];
  for(let word of wordsList){
      if (word.startsWith(myString) || word.endsWith(myString)){
          let upperCaseword=word.toUpperCase();
          newWordsList.push(upperCaseword);
      }
      else{
            newWordsList.push(word);

      }
  }
console.log(newWordsList)
}