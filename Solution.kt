
import kotlin.math.floor
import kotlin.math.sqrt

class Solution {

    private companion object {
        const val SMALLEST_DIVISOR = 1
        const val DOES_NOT_HAVE_EXACTLY_FOUR_UNIQUE_DIVISORS = 0
        const val SMALLEST_VALUE_WITH_EXACTLY_FOUR_UNIQUE_DIVISORS = 6
    }

    fun sumFourDivisors(input: IntArray): Int {
        var sumFourDivisors = 0
        for (value in input) {
            sumFourDivisors += findSumOfDivisorsIfValueHasExactlyFourUniqueDivisors(value)
        }
        return sumFourDivisors
    }

    private fun findSumOfDivisorsIfValueHasExactlyFourUniqueDivisors(value: Int): Int {
        if (value < SMALLEST_VALUE_WITH_EXACTLY_FOUR_UNIQUE_DIVISORS || squareRootOfValueIsInteger(value)) {
            return DOES_NOT_HAVE_EXACTLY_FOUR_UNIQUE_DIVISORS
        }

        val upperLimit = sqrt(value.toDouble()).toInt()
        var sumFourDivisors = DOES_NOT_HAVE_EXACTLY_FOUR_UNIQUE_DIVISORS

        for (current in SMALLEST_DIVISOR + 1..upperLimit) {
            if (value % current != 0) {
                continue
            }
            if (sumFourDivisors != DOES_NOT_HAVE_EXACTLY_FOUR_UNIQUE_DIVISORS) {
                return DOES_NOT_HAVE_EXACTLY_FOUR_UNIQUE_DIVISORS
            }
            sumFourDivisors = 1 + current + (value / current) + value
        }
        return sumFourDivisors
    }

    private fun squareRootOfValueIsInteger(value: Int): Boolean {
        return floor(sqrt(value.toDouble())) == sqrt(value.toDouble())
    }
}
