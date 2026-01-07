
using System;

public class Solution
{
    private static readonly int SMALLEST_DIVISOR = 1;
    private static readonly int DOES_NOT_HAVE_EXACTLY_FOUR_UNIQUE_DIVISORS = 0;
    private static readonly int SMALLEST_VALUE_WITH_EXACTLY_FOUR_UNIQUE_DIVISORS = 6;

    public int SumFourDivisors(int[] input)
    {
        int sumFourDivisors = 0;
        foreach (int value in input)
        {
            sumFourDivisors += FindSumOfDivisorsIfValueHasExactlyFourUniqueDivisors(value);
        }
        return sumFourDivisors;
    }

    private int FindSumOfDivisorsIfValueHasExactlyFourUniqueDivisors(int value)
    {
        if (value < SMALLEST_VALUE_WITH_EXACTLY_FOUR_UNIQUE_DIVISORS || SquareRootOfValueIsInteger(value))
        {
            return DOES_NOT_HAVE_EXACTLY_FOUR_UNIQUE_DIVISORS;
        }

        int upperLimit = (int)Math.Sqrt(value);
        int sumFourDivisors = DOES_NOT_HAVE_EXACTLY_FOUR_UNIQUE_DIVISORS;

        for (int current = SMALLEST_DIVISOR + 1; current <= upperLimit; ++current)
        {
            if (value % current != 0)
            {
                continue;
            }
            if (sumFourDivisors != DOES_NOT_HAVE_EXACTLY_FOUR_UNIQUE_DIVISORS)
            {
                return DOES_NOT_HAVE_EXACTLY_FOUR_UNIQUE_DIVISORS;
            }
            sumFourDivisors = 1 + current + (value / current) + value;
        }
        return sumFourDivisors;
    }

    private bool SquareRootOfValueIsInteger(int value)
    {
        return (int)Math.Sqrt(value) == Math.Sqrt(value);
    }
}
