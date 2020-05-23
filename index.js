function landscapeType(input) {
    let peak = 0;
    let valley = 0;
    for (let i = 1; i < input.length - 1; i++) {
        if (input[i] - input[i - 1] >= 0 && input[i + 1] - input[i] < 0) {
            peak++;
        } else if (input[i] - input[i - 1] < 0 && input[i + 1] - input[i] >= 0) {
            valley++;
        }
    }
    return peak===1 && valley===0? "mountain":peak===0 && valley===1? "valley":"neither";
    
}
console.log(landscapeType([3, 4, 5, 4, 3])); //"mountain"
console.log(landscapeType([9, 7, 3, 1, 2, 4])); //➞ "valley"
console.log(landscapeType([9, 8, 9])); // ➞ "valley"
console.log(landscapeType([9, 8, 9, 8])); // ➞ "neither"