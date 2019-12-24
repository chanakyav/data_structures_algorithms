function mergeSort(arr) {
  if (arr.length < 2) return arr;
  let midIdx = Math.floor(arr.length / 2);
  let left = arr.slice(0, midIdx);
  let right = arr.slice(midIdx);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(arr1, arr2) {
  let sortedArray = [];
  while (arr1.length && arr2.length) {
    let item = arr1[0] < arr2[0] ? arr1.shift() : arr2.shift();
    sortedArray.push(item);
  }
  return sortedArray.concat(arr1, arr2);
}

let arr1 = [1, 5, 10, 15];
let arr2 = [0, 2, 3, 7, 10];
// console.log(merge(arr1, arr2)); // => [0, 1, 2, 3, 5, 7, 10, 10, 15]

let arr = [123,5,52,12,1,-1];
console.log(mergeSort(arr));
