
function addition(number_one, number_two) {
    if(!(number_one >= 0 || number_two >=0)){
        throw new Error("Number must be positive");
    }
    if (typeof number_one !== "number" || typeof number_two !== "number") throw new Error("Number must be a number");
    return (number_one + number_two)
}

module.exports = addition;