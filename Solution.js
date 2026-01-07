
/**
 * @param {number[]} input
 * @return {number}
 */
var sumFourDivisors = function (input) {
    let sumFourDivisors = 0;
    for (let value of input) {
        sumFourDivisors += findSumOfDivisorsIfValueHasExactlyFourUniqueDivisors(value);
    }
    return sumFourDivisors;
};

class Util {
    static  SMALLEST_DIVISOR = 1;
    static DOES_NOT_HAVE_EXACTLY_FOUR_UNIQUE_DIVISORS = 0;
    static SMALLEST_VALUE_WITH_EXACTLY_FOUR_UNIQUE_DIVISORS = 6;
}

/**
 * @param {number} value
 * @return {number}
 */
function findSumOfDivisorsIfValueHasExactlyFourUniqueDivisors(value) {
    if (value < Util.SMALLEST_VALUE_WITH_EXACTLY_FOUR_UNIQUE_DIVISORS || squareRootOfValueIsInteger(value)) {
        return Util.DOES_NOT_HAVE_EXACTLY_FOUR_UNIQUE_DIVISORS;
    }

    const upperLimit = Math.sqrt(value);
    let sumFourDivisors = Util.DOES_NOT_HAVE_EXACTLY_FOUR_UNIQUE_DIVISORS;

    for (let current = Util.SMALLEST_DIVISOR + 1; current <= upperLimit; ++current) {
        if (value % current !== 0) {
            continue;
        }
        if (sumFourDivisors !== Util.DOES_NOT_HAVE_EXACTLY_FOUR_UNIQUE_DIVISORS) {
            return Util.DOES_NOT_HAVE_EXACTLY_FOUR_UNIQUE_DIVISORS;
        }
        sumFourDivisors = 1 + current + (value / current) + value;
    }
    return sumFourDivisors;
}

/**
 * @param {number} value
 * @return {boolean}
 */
function squareRootOfValueIsInteger(value) {
    return  Math.floor(Math.sqrt(value)) === Math.sqrt(value);
}
