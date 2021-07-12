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

Array.prototype.myReduce = function(callback, initialValue) {
    // should be first element if initialValue is not provided
    if (initialValue === undefined || null) {
        initialValue = this[0];
        this = this.slice(1); // get all elements after the initialValue
    }

    let result = initialValue; // our accumulator
    arr.myEach((ele) => result = callback(result, ele)); // run the callback on the array starting at initialValue
    return result; // return the accumulator
}