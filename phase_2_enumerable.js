Array.prototype.myEach = function(callback) {
    for(let i = 0; i < this.length; i++) {
        callback(this[i]); // run the function on each element, don't return anything
    }
}

Array.prototype.myMap = function(callback) {
    const newArray = [];
    this.myEach(() => { newArray.push(callback(ele)) }); // use myEach and a closure
    return newArray;
}