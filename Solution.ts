
function sumFourDivisors(input: number[]): number {
    let sumFourDivisors = 0;
    for (let value of input) {
        sumFourDivisors += findSumOfDivisorsIfValueHasExactlyFourUniqueDivisors(value);
    }
    return sumFourDivisors;
};

class Util {
    static SMALLEST_DIVISOR = 1;
    static DOES_NOT_HAVE_EXACTLY_FOUR_UNIQUE_DIVISORS = 0;
    static SMALLEST_VALUE_WITH_EXACTLY_FOUR_UNIQUE_DIVISORS = 6;
}

function findSumOfDivisorsIfValueHasExactlyFourUniqueDivisors(value: number): number {
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

function squareRootOfValueIsInteger(value: number): boolean {
    return Math.floor(Math.sqrt(value)) === Math.sqrt(value);
}
