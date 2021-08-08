const sumRec = (arr) => { 
    let [first, ...others] = arr; // destructure arr with first as the first element, and others as the second element onward
    if (arr.length <= 1) { return first }
    return first + sumRec(others);
}

const exponent = (base, exp) => {
    if (exp == 0) 1;
    return base * exponent(base, exp - 1);
}