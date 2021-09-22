/* eslint-disable */
Array.prototype.myFlat = function(num = 0) {
  let arr = [];
  for (item of this) {
    if (Array.isArray(item) && num > 0) {
      arr.push(...item.myFlat(num - 1));
    } else {
      arr.push(item);
    }
  }
  return arr;
};

var arr = [[1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10];

const arr1 = arr.myFlat();
const arr2 = arr.myFlat(1);
const arr3 = arr.myFlat(2);
const arr4 = arr.myFlat(Infinity);

console.log(arr1, 'arr1');
console.log(arr2, 'arr2');
console.log(arr3, 'arr3');
console.log(arr4, 'arr4');
