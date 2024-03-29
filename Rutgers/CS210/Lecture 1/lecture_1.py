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
s1 = 'wrangle'
s2 = "wrangle"
print('s1 == s2:', s1 == s2)

# multi-line string with three double quotes
multi_line_str = """line1,
line2, and
line3"""
print('multi_line_str:', multi_line_str)

print('cs' + '210')
print('cs' + str(210))

# when you use a number as first operand for +, it thinks you are adding (not concatenating to a string)
# x = 5 + 'y'

# repeating a string
print('abc' * 3)

# formatting printed output
m = 15
n = 10
print('{0}/{1} = {2}'.format(m, n, m / n))
print('{}/{} = {}'.format(m, n, m / n))

# using the f-string
print(f'{m}/{n} = {m/n}')

# parsing numeric value from string, querying the type of a value
x = int('5')
print('x:', x)
print('type(x):', type(x))

y = float('-5.56')
print('y:', y)
print('type(y):', type(y))

abctype = type('abc')
print('type(abctype):', type(abctype))

print("type('abc') == type(x):", type('abc') == type(x))

# boolean values and expressions

# string methods
print('####################')
s = 'myfile.ipynb'
ext = 'ipynb'
print(s.endswith(ext))
print(s.startswith('m'))
print(s.startswith('My')) # case sensitive!

s = 'this is a sentence.'
print(s.find('ten'))
print(s.find('tense'))
print(s.isalpha())

res = 'abcd'.isalpha()
print(res)
res = ''.isalpha() # if string is empty, returns false
print(res)
res = 'hey!'.isalpha() # exclamation point is not a letter
print(res)

# check if all digits
res = '1234'.isdigit()
print(res)
res = '848-123-4456'.isdigit()
print(res)

# replace
res = '09/05/2021'.replace('/', '-')
print(res)

res = 'This&that&the other'.replace('&', ' and ')
print(res)
res = 'This&that&the other'.replace('&', ' and ', 1) # only replace the first occurence
print(res)

myStr = '   There is fluff at either end   '.strip()
print(myStr)

myStr = 'Strip out ;,!'
newStr = myStr.strip(';!')
print(newStr)
# the strip method starts from the end of the string, and proceeds character by character.
# if the character is in the strip argument list, it is stripped out
# if not, the method stops