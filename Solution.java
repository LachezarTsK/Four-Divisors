
public class Solution {

    private static final int SMALLEST_DIVISOR = 1;
    private static final int DOES_NOT_HAVE_EXACTLY_FOUR_UNIQUE_DIVISORS = 0;
    private static final int SMALLEST_VALUE_WITH_EXACTLY_FOUR_UNIQUE_DIVISORS = 6;

    public int sumFourDivisors(int[] input) {
        int sumFourDivisors = 0;
        for (int value : input) {
            sumFourDivisors += findSumOfDivisorsIfValueHasExactlyFourUniqueDivisors(value);
        }
        return sumFourDivisors;
    }

    private int findSumOfDivisorsIfValueHasExactlyFourUniqueDivisors(int value) {
        if (value < SMALLEST_VALUE_WITH_EXACTLY_FOUR_UNIQUE_DIVISORS || squareRootOfValueIsInteger(value)) {
            return DOES_NOT_HAVE_EXACTLY_FOUR_UNIQUE_DIVISORS;
        }

        int upperLimit = (int) Math.sqrt(value);
        int sumFourDivisors = DOES_NOT_HAVE_EXACTLY_FOUR_UNIQUE_DIVISORS;

        for (int current = SMALLEST_DIVISOR + 1; current <= upperLimit; ++current) {
            if (value % current != 0) {
                continue;
            }
            if (sumFourDivisors != DOES_NOT_HAVE_EXACTLY_FOUR_UNIQUE_DIVISORS) {
                return DOES_NOT_HAVE_EXACTLY_FOUR_UNIQUE_DIVISORS;
            }
            sumFourDivisors = 1 + current + (value / current) + value;
        }
        return sumFourDivisors;
    }

    private boolean squareRootOfValueIsInteger(int value) {
        return (int) Math.sqrt(value) == Math.sqrt(value);
    }
}
