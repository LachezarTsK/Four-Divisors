
#include <cmath>
#include <limits>
#include <vector>
using namespace std;

class Solution {

    static const int SMALLEST_DIVISOR = 1;
    static const int DOES_NOT_HAVE_EXACTLY_FOUR_UNIQUE_DIVISORS = 0;
    static const int SMALLEST_VALUE_WITH_EXACTLY_FOUR_UNIQUE_DIVISORS = 6;

public:
    int sumFourDivisors(const vector<int>& input) const {
        int sumFourDivisors = 0;
        for (const auto& value : input) {
            sumFourDivisors += findSumOfDivisorsIfValueHasExactlyFourUniqueDivisors(value);
        }
        return sumFourDivisors;
    }

private:
    int findSumOfDivisorsIfValueHasExactlyFourUniqueDivisors(int value) const {
        if (value < SMALLEST_VALUE_WITH_EXACTLY_FOUR_UNIQUE_DIVISORS || squareRootOfValueIsInteger(value)) {
            return DOES_NOT_HAVE_EXACTLY_FOUR_UNIQUE_DIVISORS;
        }

        int upperLimit = sqrt(value);
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

    bool squareRootOfValueIsInteger(int value) const {
        return static_cast<int>(sqrt(value)) == sqrt(value);
    }
};
