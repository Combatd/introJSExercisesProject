Array.prototype.uniq = function() {
    const uniqArr = [];

    for(let i = 0; i < this.length; i++) {
        if(uniqArr[uniqArr.length - 1] != this[i]) {
            uniqArr.push(this[i]);
        }
    }
    return uniqArr;
}