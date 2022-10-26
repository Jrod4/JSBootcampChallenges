/* eslint-disable no-unused-vars */

function doesInclude(str, letter) {

  console.log(str)
  if (str.includes(letter)) {
    return true;
}
    return false;
}

function isPalindrome(str) {
let newStr = '';
for (let i = str.length - 1; i >= 0; i--) {
const letter = str [i];
console.log(letter);
newStr += letter;
}
if (newStr === str) {
  return true;
}
  return false;
}
function cap(str, letter) {
const index = str.indexOf(letter);
if (index < 0) {
  return 'sorry not found';
}
  console.log(index);

  const upperCased = str[ index + 1].toUpperCase();
  return upperCased;
}

function firstCharacter(str1, str2) {
  const firstChar1 = str1(0).toLowerCase(0)
  const firstChar2 = str2(0).toLowerCase(0)

  
if (firstChar1 === firstChar2) {
  return true;
}
  return false; 


if (str1[0].toLowerCase() === str2[0].toLowerCase()) {
  return true;
}
  return false; 
}

module.exports = {
  cap, firstCharacter, doesInclude, isPalindrome,
};
