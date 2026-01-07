
package main
import "math"

const SMALLEST_DIVISOR = 1
const DOES_NOT_HAVE_EXACTLY_FOUR_UNIQUE_DIVISORS = 0
const SMALLEST_VALUE_WITH_EXACTLY_FOUR_UNIQUE_DIVISORS = 6

func sumFourDivisors(input []int) int {
    sumFourDivisors := 0
    for _, value := range input {
        sumFourDivisors += findSumOfDivisorsIfValueHasExactlyFourUniqueDivisors(value)
    }
    return sumFourDivisors
}

func findSumOfDivisorsIfValueHasExactlyFourUniqueDivisors(value int) int {
    if value < SMALLEST_VALUE_WITH_EXACTLY_FOUR_UNIQUE_DIVISORS || squareRootOfValueIsInteger(value) {
        return DOES_NOT_HAVE_EXACTLY_FOUR_UNIQUE_DIVISORS
    }

    upperLimit := int(math.Sqrt(float64(value)))
    sumFourDivisors := DOES_NOT_HAVE_EXACTLY_FOUR_UNIQUE_DIVISORS

    for current := SMALLEST_DIVISOR + 1; current <= upperLimit; current++ {
        if value%current != 0 {
            continue
        }
        if sumFourDivisors != DOES_NOT_HAVE_EXACTLY_FOUR_UNIQUE_DIVISORS {
            return DOES_NOT_HAVE_EXACTLY_FOUR_UNIQUE_DIVISORS
        }
        sumFourDivisors = 1 + current + (value / current) + value
    }
    return sumFourDivisors
}

func squareRootOfValueIsInteger(value int) bool {
    return math.Floor(math.Sqrt(float64(value))) == math.Sqrt(float64(value))
}
