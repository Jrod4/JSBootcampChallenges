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

}

function camelCase(str) {

}

function joiner() {

}

module.exports = {
  multiply, includesCopy, inventory, camelCase, joiner,
};
