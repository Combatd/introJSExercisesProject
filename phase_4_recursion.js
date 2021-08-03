const sumRec = (arr) => { 
    let [first, ...others] = arr; // destructure arr with first as the first element, and others as the second element onward
    if (arr.length <= 1) { return first }
    return first + sumRec(others);
}