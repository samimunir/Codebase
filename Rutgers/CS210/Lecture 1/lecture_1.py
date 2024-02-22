# Sami Munir
# January 18th, 2024
# Rutgers University
# CS210 - Data Management for Data Science
####################################################################
# Python Basics
# - literals
# - variables
# - printing
x = 2 + 5
print('x:', x)
print('type(x):', type(x), '\n')

x = 'start'
print('x:', x)
print('type(x):', type(x), '\n')

x = 2
y = 5
print('x:', x)
print('y:', y)
print(x, ',', y)
print(x, ",", y)

print("'")
print('"')

# real number result
x = 3 / 2
print('3 / 2 =', x)

# integer result, fractional part truncated
x = 3 // 2
print('3 // 2 =', x)

# modulus functions, gives remainder of 7 divided by 2
x = 11 % 3
print('11 % 3 =', x)

# modulus can be used on real numbers as well, and divisor can be an integer or real number
x = 7.2 % 5
print('7.2 % 5 =', x)

x = 2.4 % 1.2
print('2.4 % 1.2 =', x)

x = 2.4 % 1.9
print('2.4 % 1.9 =', x)

# arithmetic expressions, math functions
x = 2 + 3 * 5
print('2 + 3 * 5 =', x)

x = (2 + 3) * 5
print('(2 + 3) * 5 =', x)

x = 3 ** 2 # power
print('3 ** 2 =', x)

x = 3 ** 2.2
print('3 ** 2.2 =', x)

x = -3 ** 3
print('-3 ** 3 =', x)

x = -3.2 ** 1.5
print('-3.2 ** 1.5 =', x)

# casting
x = int(5.56)
print('x = int(5.56) -->', x)

x = 77
print('x is', str(x))

# Strings