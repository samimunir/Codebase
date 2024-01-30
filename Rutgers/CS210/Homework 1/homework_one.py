# Sami Munir
# February 14th, 2024
# Rutgers University
# CS210 - Data Management for Data Science

# Question 1 - primes
# Write a function to return all the prime numbers less than n, where
#   n is a parameter (assume n > 2).
def primes(n):
    primes = []
    for num in range(2, n):
        isPrime = True
        for i in range(2, int(num ** 0.5) + 1):
            if num % i == 0:
                isPrime = False
                break
        if isPrime:
            primes.append(num)
    return primes

# <--- Testing function primes(n) --->
result = primes(10)
print('\nprimes(10):')
print('\tresult:', result)

result = primes(3)
print('\nprimes(3):')
print('\tresult:', result)

result = primes(100)
print('\nprimes(100):')
print('\tresult:', result)

# Question 2 - factor
# Write a function to return all the prime factors of n, where n is a
#   parameter.

# Question 3 - decreasing_digits
# Write a function called decreasing_digits to count all integers from 1
#   to n (inclusive) that have all digits in decreasing order, where n is
#   is given as a parameter.

# Question 4 - stats
# Write a function called stats to return the mean and median of a list of
#   integers given as a parameter.
import math
def stats(ints):
    sortedInts = sorted(ints)
    total = 0
    for i in range(len(sortedInts)):
        total += sortedInts[i]
    average = total / len(sortedInts)
    if (len(sortedInts) % 2 == 0):
        mid = math.floor(len(sortedInts) / 2)
        a = sortedInts[mid]
        b = sortedInts[mid - 1]
        median = (a + b) / 2
    else:
        mid = math.floor(len(sortedInts) / 2)
        median = sortedInts[mid]
    return {'mean': average, 'median': median}

# <--- Testing function stats(ints) --->
result = stats([15, 4, 10, 2])
print('\nstats([15, 4, 10, 2]):')
print('\tresult:', result)

result = stats([-1, 12, -63, 17, 2, 11, 94, -47, 11])
print('\nstats([-1, 12, -63, 17, 2, 11, 94, -47, 11]):')
print('\tresult:', result)