function binarySearch(target, nums) {
    let floorIndex = -1;
    let ceilingIndex = nums.length;

    while (floorIndex + 1 < ceilingIndex) {
        const halfDistance = Math.floor((ceilingIndex - floorIndex) / 2);
        const guessIndex = floorIndex + halfDistance;
        const guessValue = nums[guessIndex];

        console.log(guessIndex, guessValue)

        if (guessValue === target) {
            return true;
        }
        if (guessValue > target) {
            ceilingIndex = guessIndex;
        } else {
            floorIndex = guessIndex;
        }
    }
    return false;
}

console.log(binarySearch(6, [1,2,3,4,5,6,7]));