function countInRange(arr, N) {
    let first = arr[0];
    let count = 0;
    for (let num of arr) {
        if (num >= first && num <= N) {
            count++;
        }
    }
    return count;
}

console.log(countInRange([1, 2, 3, 4, 5], 4));  
