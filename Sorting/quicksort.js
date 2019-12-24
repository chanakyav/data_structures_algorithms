function quickSort(arr) {
  if (arr.length < 2) return arr;
  let pivot = arr.shift();
  let left = arr.filter(el => el <= pivot);
  let right = arr.filter(el => el > pivot);
  return [...quickSort(left), pivot, ...quickSort(right)];
}

function partition(arr, n) {
  let left = arr.filter( el => el <= n );
  let right = arr.filter( el => el > n);
  return [left, right];
}

let arr = [7, 3, 8, 9, 2];
// console.log(partition(arr, 5));  // => [[3, 2], [7,8,9]]

console.log(quickSort(arr));
