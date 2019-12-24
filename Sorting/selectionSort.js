function swap(array, idx1, idx2) {
	let temp = array[idx1];
	array[idx1] = array[idx2];
	array[idx2] = temp;
}

function selectionSort(array) {
    if (array.length <= 1) return array;
    for (let i = 0; i < array.length; i++) {
        let minIndex = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[minIndex]) minIndex = j;
        }
        swap(array, i, minIndex);
    }
    return array;
}

let a = [];
console.log(selectionSort(a));

a = [1];
console.log(selectionSort(a));

a = [5, 3, 1, 6, 0];
console.log(selectionSort(a));