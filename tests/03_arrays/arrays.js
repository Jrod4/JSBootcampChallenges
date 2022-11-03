/* eslint-disable no-unused-vars */
function multiply(arr) {
let total = 1;

const flatArray = arr.flat();

for (let i = 0; i < flatArray.length; i++) {
  total *= flatArray[i];
}
return total; 
}

function includesCopy(arr, searchValue) {
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === searchValue) {
    return true;
  }
}
return false;
}

function inventory(arr) {
const returnArr = [];
for (let i = 0; i < arr.length; i++) {
  const nestArr = arr[i];
  const str = 'The' + ' ' + nestArr[1][0] + ' ' + nestArr[0] + ' is ' + nestArr[1][1] + ' dollars. ';
 returnArr.push(str);
}
return returnArr;
}

function camelCase(str) {
const punctuation = '!.?,:;';
const arr = str.split(' ');
const returnArr = [];
for (let i = 0; i < arr.length; i++) {
  const word = arr[i];
  let firstLetter;
  if (i === 0) {
    firstLetter = word[0].toLowerCase();
  } else {
    firstLetter = word[0].toUpperCase();
    }
  const restOfWord = word.slice(1);
  returnArr.push(firstLetter + restOfWord.toLowerCase());
  }
  console.log(returnArr);
  const joinedString = returnArr.join('');
  if (punctuation.includes(joinedString[joinedString.length -1])) {
    return joinedString.slice(0, joinedString.length - 1);
  }
  return joinedString;
}


function joiner(arr, del = ',') {
let str = '';
for (let i = 0; i < arr.length; i++) {
  if (i === arr.length -1) {
    str += arr[i];
  } else {
    str += arr[i] + del;
  }
  }
  return str;
}

module.exports = {
  multiply, includesCopy, inventory, camelCase, joiner,
};
