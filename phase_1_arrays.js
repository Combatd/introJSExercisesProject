Array.prototype.uniq = function() {
    const uniqArr = [];

    for(let i = 0; i < this.length; i++) {
        if(uniqArr[uniqArr.length - 1] != this[i]) {
            uniqArr.push(this[i]);
        }
    }
    return uniqArr;
}

Array.prototype.twoSum = function() {
    const allKeys = { };
    let zeroSumPairs = [];

    for (let i = 0; i < this.length; i++) {
        const targetValue = allKeys[0 - this[i]];
        if (allKeys[this[i]]) {
            continue;
        }
        if (targetValue) {
            zeroSumPairs.push([0 - this[i], this[i]]);
        }
        allKeys[this[i]] = true;
    }
    return zeroSumPairs;
}