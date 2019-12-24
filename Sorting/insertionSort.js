function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
        let currentElem = array[i];
        let j = 0;
        for (j = i - 1; j >= 0 && currentElem < array[j]; j--) {
            array[j + 1] = array[j];
        }
        array[j + 1] = currentElem;
        console.log(array);
    }
    return array;
}


a = [5, 3, 1, 6, 0];
console.log(insertionSort(a));
