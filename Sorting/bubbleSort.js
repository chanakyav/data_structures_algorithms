function swap(array, idx1, idx2) {
    let temp = array[idx1];
    array[idx1] = array[idx2];
    array[idx2] = temp;
}

function bubbleSort(array) {
    if (array.length <= 1) return array;
    let sorted = true;
    while (sorted) {
        sorted = false;
        for (let i = 0; i < array.length - 1; i++) {
            if (array[i] > array[i+1]) {
                swap(array, i, i + 1);
                sorted = true;
            }
        }
    }
    return array;
}

let a = [];
console.log(bubbleSort(a));

a = [1];
console.log(bubbleSort(a));

a = [5,3,1,6,0];
console.log(bubbleSort(a));
