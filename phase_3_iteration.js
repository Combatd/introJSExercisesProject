Array.prototype.bubbleSort = function() {
    let isSwapped = true;

    while(isSwapped){
        isSwapped = false; // stop condition of iteration
        for (let i = 0; i < this.length; i++) {
            if(this[i] > this[i + 1]) {
                const temp = this[i]; // hold value of current element in temp
                this[i] = this[i + 1];
                this[i + 1] = temp; // original value of current element goes to next element
                isSwapped = true;
            }
        }

        return this;
    }
}

String.prototype.substrings = function() {
    let subStrings = [];
    for (let i = 0; i < this.length; i++) {
        for(let j = i + 1; j<= this.length; j++) {
            subStrings.push(this.slice(i, j)); // keeps grabbing all the substrings
        }
    }
    return subStrings;
}