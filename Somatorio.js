function somatorio(array) {
    return array.reduce((acc, num) => acc + num, 0);
}

console.log(somatorio([1, 2, 3, 4, 5]));
